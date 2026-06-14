export const onRequestGet = async () => {
  const getPubPackageData = async (pkgName: string) => {
    try {
      const infoRes = await fetch(`https://pub.dev/api/packages/${pkgName}`);
      const metricsRes = await fetch(
        `https://pub.dev/api/packages/${pkgName}/metrics`,
      );

      const info = (await infoRes.json()) as any;
      const metrics = (await metricsRes.json()) as any;

      return {
        name: pkgName,
        version: info?.latest?.version || "2.0.0",
        likes: metrics?.score?.likeCount || 0,
        pubPoints: metrics?.score?.grantedPoints || 0,
        popularity:
          Math.round((metrics?.score?.popularityScore || 0) * 100) + "%",
      };
    } catch (e) {
      return {
        name: pkgName,
        version: "0.0.0",
        likes: 0,
        pubPoints: 0,
        popularity: "0%",
      };
    }
  };

  const results = await Promise.all([
    getPubPackageData("flutter_gemini_nano"),
    getPubPackageData("device_context_plus"),
  ]);

  return new Response(JSON.stringify(results), {
    headers: { "Content-Type": "application/json" },
  });
};
