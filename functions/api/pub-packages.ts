export const onRequestGet = async (context: any) => {
  const getPubPackageData = async (
    pkgName: string,
    defaultLikes: number,
    defaultPoints: number,
    defaultPopularity: string,
    defaultVersion: string,
  ) => {
    let version = defaultVersion;
    let likes = defaultLikes;
    let pubPoints = defaultPoints;
    let popularity = defaultPopularity;

    try {
      const infoRes = await fetch(`https://pub.dev/api/packages/${pkgName}`);
      if (infoRes.ok) {
        const infoJson = (await infoRes.json()) as any;
        if (infoJson?.latest?.version) version = infoJson.latest.version;
      }

      const metricsRes = await fetch(
        `https://pub.dev/api/packages/${pkgName}/metrics`,
      );
      if (metricsRes.ok) {
        const metricsJson = (await metricsRes.json()) as any;
        const score = metricsJson?.score || metricsJson?.scorecard;
        if (score) {
          if (typeof score.likeCount === "number") likes = score.likeCount;
          else if (typeof score.likes === "number") likes = score.likes;
          if (typeof score.grantedPoints === "number")
            pubPoints = score.grantedPoints;
          if (typeof score.popularityScore === "number")
            popularity = Math.round(score.popularityScore * 100) + "%";
        }
      }
    } catch (e) {
      console.warn(`Error fetching data for ${pkgName}:`, e);
    }

    return { name: pkgName, version, likes, pubPoints, popularity };
  };

  try {
    const results = await Promise.all([
      getPubPackageData("flutter_gemini_nano", 48, 135, "94%", "2.0.0"),
      getPubPackageData("device_context_plus", 31, 125, "91%", "1.0.3"),
    ]);

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: "Failed to fetch metrics" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
