import { TimelineItem, Certification, ProjectDetail } from "./types";

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "fz-present",
    company: "Fundação Zerrenner",
    role: "Mobile Developer (Mobile & Frontend)",
    period: "abril de 2021 - Present (5 anos)",
    location: "São Paulo, SP, Brasil",
    description: "Sólida experiência em desenvolvimento mobile e frontend web, especializado na criação de aplicativos nativos e híbridos de alta performance.",
    type: "mobile",
    tags: ["Kotlin", "Jetpack Compose", "Flutter", "BLoC", "React", "TypeScript", "Azure DevOps"],
    achievements: [
      "Desenvolvimento de aplicativos Android nativos em Kotlin/Java, utilizando Jetpack Compose, Activities, Services, ContentProviders, JobServices e Workers.",
      "Manutenção e refatoração de aplicativos legados complexos seguindo as diretrizes oficiais do Google e otimização de performance.",
      "Construção de apps multiplataforma robustos usando Dart/Flutter e arquitetura BLoC para gerenciamento de estado previsível.",
      "Criação e manutenção de testes unitários com JUnit (Android) e Mocktail (Flutter) para garantir cobertura de código superior.",
      "Desenvolvimento de aplicações web modernas com React.js e TypeScript, Next.js para Server-Side Rendering (SSR).",
      "Implementação de Design Systems personalizados com foco em acessibilidade, usabilidade e componentização reaproveitável.",
      "Configuração de pipelines automatizados de CI/CD no Azure DevOps para compilação, testes estáticos com SonarQube e deploy automático na PlayStore.",
      "Integração contínua e telemetria avançada de bugs e comportamento usando DataDog e Crashlytics."
    ]
  },
  {
    id: "kantar-ibope",
    company: "Kantar IBOPE Media",
    role: "Engenheiro de P&D (R&D Engineer)",
    period: "junho de 2018 - abril de 2021 (2 anos 11 meses)",
    location: "São Paulo, SP, Brasil",
    type: "embedded",
    description: "Android developer focado em sistemas embarcados (Android, Linux e hardware baseado em Raspberry Pi).",
    tags: ["Android Embedded", "Java", "Kotlin", "Bluetooth BLE", "Gradle", "JUnit", "Azure DevOps"],
    achievements: [
      "Integração de sensores e periféricos industriais via protocolos de comunicação Bluetooth BLE (Bluetooth Low Energy).",
      "Desenvolvimento de componentes nativos de baixo nível (Android Application, Activity, Service, ContentProvider, JobService, Worker).",
      "Gerenciamento rigoroso do ciclo de vida de componentes seguindo as diretrizes do Google (LifeCycle) para ambientes embarcados ininterruptos (24/7).",
      "Implementação de rotinas robustas de build automatizado via Gradle e pipelines de entregas contínuas com Azure DevOps.",
      "Escrita de suites de testes unitários abrangentes com JUnit para assegurar estabilidade de APIs e da camada de rede."
    ]
  },
  {
    id: "oz-tech",
    company: "OZ Technology",
    role: "Android Developer",
    period: "julho de 2016 - junho de 2018 (2 anos)",
    location: "Itaim Bibi - SP, Brasil",
    type: "mobile",
    description: "Desenvolvedor Android nativo responsável por conceber, refatorar e publicar aplicações móveis.",
    tags: ["Java", "Android Studio", "Material Design", "REST APIs", "Git"],
    achievements: [
      "Desenvolvimento de aplicações Android do zero em Java utilizando Android Studio.",
      "Integração de APIs RESTful usando bibliotecas consagradas de networking e concorrência nativa.",
      "Aplicação de boas práticas de design visual respeitando as especificações originais do Material Design."
    ]
  },
  {
    id: "coreware",
    company: "Coreware Ltda",
    role: "Analista de Desenvolvimento",
    period: "novembro de 2012 - março de 2016 (3 anos 5 meses)",
    location: "Mooca - SP, Brasil",
    type: "other",
    description: "Atuação no desenvolvimento e manutenção de sistemas corporativos ERP e aplicações web legadas.",
    tags: ["Delphi 7", "Intraweb", "Oracle 10g", "JavaScript", "Enterprise Architect"],
    achievements: [
      "Desenvolvimento de telas corporativas e regras de negócio com Delphi 7 Intraweb e modelagem de banco de dados Oracle 10g.",
      "Validações ricas no lado do cliente utilizando JavaScript baunilha.",
      "Modelagem conceitual e projeto de banco de dados no Enterprise Architect."
    ]
  },
  {
    id: "sitel-support",
    company: "Sitel",
    role: "Analista de Suporte",
    period: "abril de 2012 - novembro de 2012 (8 meses)",
    location: "Mooca - SP, Brasil",
    type: "other",
    description: "Suporte de TI especializado focado em entregar soluções rápidas a clientes exigentes.",
    tags: ["Suporte Dell", "Acesso Remoto", "Redes", "Atendimento"],
    achievements: [
      "Atendimento técnico especializado aos usuários finais corporativos e residenciais da Dell.",
      "Resolução de problemas de infraestrutura, hardware, sistemas operacionais e conectividade via chat, telefone e ferramentas de suporte remoto."
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "Jetpack Compose: utilizando Lazy Layout e os estados",
    issuer: "Google Authorized / Alura",
  },
  {
    title: "React: desenvolvendo aplicações web modernas com JavaScript",
    issuer: "Alura",
  },
  {
    title: "Jetpack Compose: criando uma interface reativa e dinâmica no Android",
    issuer: "Alura",
  },
  {
    title: "Testes de unidade e Widget com Mocks: boas práticas de arquitetura em Flutter",
    issuer: "Flutter Community / Alura",
  }
];

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    title: "App Conecta 2.0 (Fundação Zerrenner)",
    description: "Aplicativo corporativo de grande escala que integra informações de planos de benefícios de saúde, educação, prontuários eletrônicos e portal do beneficiário.",
    platform: "Android",
    techStack: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Coroutines", "Dagger Hilt", "Room", "Retrofit"],
    features: [
      "Arquitetura modular em 3 camadas (Presentation, Domain, Data).",
      "UI totalmente declarativa em Jetpack Compose com fluxos reativos em StateFlow.",
      "Otimização extrema de performance de listagem com Lazy Columns e renderização condicional refinada."
    ]
  },
  {
    title: "Design System Beneficiário (Fahz AlexandreDS)",
    description: "Criação de um repositório centralizado de componentes web de alta acessibilidade para unificar todos os projetos da instituição.",
    platform: "React",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Storybook", "React Query", "Jest"],
    features: [
      "Biblioteca de botões, modais, formulários, grids responsivos e alertas de status com validações integradas.",
      "Garantia estrita de contraste AAA e navegação por teclado (WCAG compliance).",
      "Documentação viva no Storybook com testes de regressão visual automatizados."
    ]
  },
  {
    title: "Aplicação Híbrida de Atendimento (Flutter)",
    description: "App multiplataforma veloz para preenchimento de formulários de saúde remota offline, sincronização inteligente em segundo plano.",
    platform: "Flutter",
    techStack: ["Dart", "Flutter SDK", "BLoC Pattern", "Mocktail", "Hive DB", "Dio"],
    features: [
      "Gerenciamento de estado de alta previsibilidade com BLoC.",
      "Suporte offline robusto com sincronização em JobServices nativos no Android e no iOS Background Tasks.",
      "Testes refinados de cobertura unitária mockando sensores e redes instáveis."
    ]
  }
];

export const LANGUAGES_DATA = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Profissional Técnico / Fluência de Leitura e Escrita" }
];

export const TECHNICAL_SKILLS = {
  mobile: ["Android SDK", "Kotlin / Java", "Jetpack Compose", "Flutter / Dart", "BLoC Pattern", "Android Jetpack (Lifecycle, WorkManager, Services)", "Gradle Build System", "Activities & Content Providers"],
  frontend: ["React.js", "TypeScript", "Next.js (SSR)", "Custom Design Systems", "React Query (TanStack)", "Zod / Schema Validation", "Tailwind CSS", "Custom Hooks", "State Management (Zustand, Context)"],
  devops: ["Azure DevOps", "CI/CD Pipelines", "SonarQube Quality Gate", "Git & GitFlow", "Docker", "Crashlytics", "DataDog Monitoring"],
  architecture: ["Clean Architecture (3 Layers)", "Domain-Driven Design (DDD) basics", "SOLID Principles", "MVVM (Android) & BLoC (Flutter)", "Unit Testing (JUnit, Mocktail, Mockito)"]
};

// Clean Architecture Code examples for Interactive Simulator
export const CLEAN_ARCH_CODE = {
  android: {
    presentation: `// ViewModel in Presentation Layer utilizing StateFlow
@HiltViewModel
class UserViewModel @Inject constructor(
    private val getUserProfileUseCase: GetUserProfileUseCase
) : ViewModel() {

    private val _uiState = MutableStateFlow<UserUiState>(UserUiState.Idle)
    val uiState: StateFlow<UserUiState> = _uiState.asStateFlow()

    fun loadUserProfile(userId: String) {
        viewModelScope.launch {
            _uiState.value = UserUiState.Loading
            getUserProfileUseCase(userId)
                .collect { result ->
                    _uiState.value = when (result) {
                        is Resource.Success -> UserUiState.Success(result.data)
                        is Resource.Error -> UserUiState.Error(result.message)
                    }
                }
        }
    }
}

// UI State representation in Jetpack Compose
@Composable
fun UserProfileScreen(viewModel: UserViewModel) {
    val state by viewModel.uiState.collectAsState()
    
    Box(modifier = Modifier.fillMaxSize()) {
        when (val s = state) {
            is UserUiState.Loading -> CircularProgressIndicator()
            is UserUiState.Success -> ProfileDetails(s.user)
            is UserUiState.Error -> ErrorMessage(s.message)
        }
    }
}`,
    domain: `// Use Case (Interactor) representing business logic in Domain layer
class GetUserProfileUseCase @Inject constructor(
    private val userRepository: UserRepository
) {
    // Invoke operator executes user story isolately
    suspend operator fun invoke(userId: String): Flow<Resource<User>> {
        if (userId.isBlank()) {
            return flow { emit(Resource.Error("ID inválido")) }
        }
        return userRepository.observeUserProfile(userId)
    }
}

// Repository Interface definition (Abstraction in Domain Layer)
interface UserRepository {
    suspend fun observeUserProfile(userId: String): Flow<Resource<User>>
    suspend fun updateUserProfile(user: User): Resource<Unit>
}`,
    data: `// Repository Implementation in Data layer coordinates DataSources
class UserRepositoryImpl @Inject constructor(
    private val remoteDataSource: UserRemoteDataSource,
    private val localDataSource: UserLocalDatabase
) : UserRepository {

    override suspend fun observeUserProfile(userId: String): Flow<Resource<User>> {
        return flow {
            // Check cache first (offline support)
            val cached = localDataSource.getUserById(userId)
            if (cached != null) {
                emit(Resource.Success(cached.toDomain()))
            }
            // Fetch remote and sync cache
            try {
                val apiResponse = remoteDataSource.fetchUser(userId)
                if (apiResponse.isSuccessful) {
                    val networkUser = apiResponse.body()!!
                    localDataSource.insertUser(networkUser.toLocalEntity())
                    emit(Resource.Success(networkUser.toDomain()))
                }
            } catch (e: Exception) {
                if (cached == null) {
                    emit(Resource.Error("Falha de conexão com os dados oficiais"))
                }
            }
        }
    }
}`
  },
  flutter: {
    presentation: `// BLoC State Management in Flutter Presentation Layer
class ProfileBloc extends Bloc<ProfileEvent, ProfileState> {
  final GetUserProfileUseCase getUserProfile;

  ProfileBloc({required this.getUserProfile}) : super(ProfileInitial()) {
    on<LoadProfileEvent>((event, emit) async {
      emit(ProfileLoading());
      try {
        final user = await getUserProfile(event.userId);
        emit(ProfileLoaded(user: user));
      } catch (error) {
        emit(ProfileError(message: error.toString()));
      }
    });
  }
}

// Consuming state in UI with BlocBuilder
Widget build(BuildContext context) {
  return BlocBuilder<ProfileBloc, ProfileState>(
    builder: (context, state) {
      if (state is ProfileLoading) return CircularProgress();
      if (state is ProfileLoaded) return ProfileDetail(user: state.user);
      return Container();
    }
  );
}`,
    domain: `// Domain Layer Use Case (Interacts purely with Entities & Repositories)
class GetUserProfileUseCase {
  final ProfileRepository repository;

  GetUserProfileUseCase(this.repository);

  Future<UserEntity> call(String userId) async {
    if (userId.isEmpty) {
      throw ValidationException('UserId não pode ser em branco');
    }
    return await repository.getUserProfile(userId);
  }
}

// Domain Layer abstract contract
abstract class ProfileRepository {
  Future<UserEntity> getUserProfile(String userId);
}`,
    data: `// Data Layer Repository implementation coordinate remote endpoints
class ProfileRepositoryImpl implements ProfileRepository {
  final ProfileRemoteDataSource remoteDataSource;
  final LocalStorageCache cache;

  ProfileRepositoryImpl({
    required this.remoteDataSource,
    required this.cache
  });

  @override
  Future<UserEntity> getUserProfile(String userId) async {
    try {
      final model = await remoteDataSource.getUser(userId);
      await cache.saveProfile(model);
      return model.toEntity();
    } catch (e) {
      // Fallback local if network fails
      final local = await cache.getProfile(userId);
      if (local != null) return local.toEntity();
      rethrow;
    }
  }
}`
  }
};
