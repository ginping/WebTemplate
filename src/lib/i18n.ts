export const publicLocales = ["en", "zh", "es", "pt", "de", "fr", "ja", "ko"] as const;

export type PublicLocale = (typeof publicLocales)[number];

export const defaultLocale: PublicLocale = "en";
export const localizedLocales = publicLocales.filter((locale) => locale !== defaultLocale);

type Dictionary = {
  languageName: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  foundationTitle: string;
  foundationItems: readonly string[];
  cloudflareTitle: string;
  cloudflareBody: string;
  statusReady: string;
  themeLabel: string;
  themeSystem: string;
  themeLight: string;
  themeDark: string;
  languageLabel: string;
};

export const dictionaries: Record<PublicLocale, Dictionary> = {
  en: {
    languageName: "English",
    eyebrow: "A small, sturdy starting point",
    title: "Build the idea. Keep the foundation boring.",
    description:
      "A production-minded Next.js starter with typed i18n, resilient themes, responsive defaults, tests, documentation, and Cloudflare delivery already wired.",
    primaryAction: "Start building",
    secondaryAction: "Check the health API",
    foundationTitle: "Useful constraints, already present",
    foundationItems: [
      "Eight-locale contract",
      "Light, dark, and system themes",
      "Unit and browser gates",
      "Cloudflare-first runtime",
    ],
    cloudflareTitle: "Lightweight by design",
    cloudflareBody:
      "Begin with one Worker. Add D1, R2, or KV only when the product has a real need for them.",
    statusReady: "Template ready",
    themeLabel: "Color theme",
    themeSystem: "System",
    themeLight: "Light",
    themeDark: "Dark",
    languageLabel: "Language",
  },
  zh: {
    languageName: "中文",
    eyebrow: "一个小而稳固的起点",
    title: "专注实现想法，让工程底座保持可靠。",
    description:
      "面向上线的 Next.js 模板，已经接好类型安全的国际化、三态主题、响应式布局、测试、文档和 Cloudflare 发布。",
    primaryAction: "开始开发",
    secondaryAction: "检查健康接口",
    foundationTitle: "开箱即用的工程约束",
    foundationItems: [
      "八语言契约",
      "浅色、深色与跟随系统",
      "单元与浏览器门禁",
      "Cloudflare 优先运行时",
    ],
    cloudflareTitle: "为轻量起步而设计",
    cloudflareBody: "先从一个 Worker 开始，只有产品真实需要时再加入 D1、R2 或 KV。",
    statusReady: "模板已就绪",
    themeLabel: "颜色主题",
    themeSystem: "跟随系统",
    themeLight: "浅色",
    themeDark: "深色",
    languageLabel: "语言",
  },
  es: {
    languageName: "Español",
    eyebrow: "Un punto de partida pequeño y sólido",
    title: "Construye la idea. Mantén la base predecible.",
    description:
      "Una plantilla Next.js preparada para producción con i18n tipado, temas, diseño adaptable, pruebas, documentación y despliegue en Cloudflare.",
    primaryAction: "Empezar a crear",
    secondaryAction: "Verificar la API",
    foundationTitle: "Restricciones útiles incluidas",
    foundationItems: [
      "Contrato de ocho idiomas",
      "Temas claro, oscuro y sistema",
      "Pruebas unitarias y de navegador",
      "Runtime centrado en Cloudflare",
    ],
    cloudflareTitle: "Ligera por diseño",
    cloudflareBody: "Empieza con un Worker. Añade D1, R2 o KV solo cuando el producto lo necesite.",
    statusReady: "Plantilla lista",
    themeLabel: "Tema de color",
    themeSystem: "Sistema",
    themeLight: "Claro",
    themeDark: "Oscuro",
    languageLabel: "Idioma",
  },
  pt: {
    languageName: "Português",
    eyebrow: "Um ponto de partida pequeno e sólido",
    title: "Construa a ideia. Mantenha a base previsível.",
    description:
      "Um template Next.js pronto para produção com i18n tipado, temas, responsividade, testes, documentação e entrega pela Cloudflare.",
    primaryAction: "Começar a criar",
    secondaryAction: "Verificar a API",
    foundationTitle: "Restrições úteis já incluídas",
    foundationItems: [
      "Contrato de oito idiomas",
      "Temas claro, escuro e sistema",
      "Testes unitários e de navegador",
      "Runtime focado na Cloudflare",
    ],
    cloudflareTitle: "Leve por princípio",
    cloudflareBody:
      "Comece com um Worker. Adicione D1, R2 ou KV apenas quando o produto realmente precisar.",
    statusReady: "Template pronto",
    themeLabel: "Tema de cor",
    themeSystem: "Sistema",
    themeLight: "Claro",
    themeDark: "Escuro",
    languageLabel: "Idioma",
  },
  de: {
    languageName: "Deutsch",
    eyebrow: "Ein kleiner, stabiler Ausgangspunkt",
    title: "Baue die Idee. Halte das Fundament verlässlich.",
    description:
      "Ein produktionsnahes Next.js-Template mit typisierter Internationalisierung, Themes, responsivem Layout, Tests, Dokumentation und Cloudflare-Deployment.",
    primaryAction: "Loslegen",
    secondaryAction: "Health API prüfen",
    foundationTitle: "Sinnvolle Leitplanken inklusive",
    foundationItems: [
      "Vertrag für acht Sprachen",
      "Hell, dunkel und System",
      "Unit- und Browser-Tests",
      "Cloudflare-zentrierte Laufzeit",
    ],
    cloudflareTitle: "Bewusst leichtgewichtig",
    cloudflareBody:
      "Starte mit einem Worker. Ergänze D1, R2 oder KV erst bei echtem Produktbedarf.",
    statusReady: "Template bereit",
    themeLabel: "Farbschema",
    themeSystem: "System",
    themeLight: "Hell",
    themeDark: "Dunkel",
    languageLabel: "Sprache",
  },
  fr: {
    languageName: "Français",
    eyebrow: "Un point de départ petit et solide",
    title: "Construisez l’idée. Gardez une base prévisible.",
    description:
      "Un modèle Next.js prêt pour la production avec i18n typée, thèmes, responsive, tests, documentation et déploiement Cloudflare.",
    primaryAction: "Commencer",
    secondaryAction: "Vérifier l’API",
    foundationTitle: "Des contraintes utiles intégrées",
    foundationItems: [
      "Contrat pour huit langues",
      "Thèmes clair, sombre et système",
      "Tests unitaires et navigateur",
      "Runtime centré sur Cloudflare",
    ],
    cloudflareTitle: "Léger par conception",
    cloudflareBody:
      "Commencez avec un Worker. Ajoutez D1, R2 ou KV seulement quand le produit en a besoin.",
    statusReady: "Modèle prêt",
    themeLabel: "Thème de couleur",
    themeSystem: "Système",
    themeLight: "Clair",
    themeDark: "Sombre",
    languageLabel: "Langue",
  },
  ja: {
    languageName: "日本語",
    eyebrow: "小さく堅牢な出発点",
    title: "アイデアに集中し、土台は安定させる。",
    description:
      "型安全な i18n、3 種類のテーマ、レスポンシブ対応、テスト、ドキュメント、Cloudflare 配信を備えた Next.js テンプレートです。",
    primaryAction: "開発を始める",
    secondaryAction: "Health API を確認",
    foundationTitle: "最初から備わる実用的な制約",
    foundationItems: [
      "8 言語の契約",
      "ライト・ダーク・システム",
      "ユニット・ブラウザテスト",
      "Cloudflare 優先ランタイム",
    ],
    cloudflareTitle: "軽量なスタート",
    cloudflareBody: "まずは 1 つの Worker から。D1、R2、KV は本当に必要になってから追加します。",
    statusReady: "テンプレート準備完了",
    themeLabel: "カラーテーマ",
    themeSystem: "システム",
    themeLight: "ライト",
    themeDark: "ダーク",
    languageLabel: "言語",
  },
  ko: {
    languageName: "한국어",
    eyebrow: "작지만 단단한 시작점",
    title: "아이디어에 집중하고 기반은 안정적으로 유지하세요.",
    description:
      "타입 안전 i18n, 세 가지 테마, 반응형 레이아웃, 테스트, 문서와 Cloudflare 배포를 갖춘 Next.js 템플릿입니다.",
    primaryAction: "개발 시작",
    secondaryAction: "상태 API 확인",
    foundationTitle: "처음부터 갖춘 유용한 제약",
    foundationItems: [
      "8개 언어 계약",
      "라이트·다크·시스템 테마",
      "단위·브라우저 테스트",
      "Cloudflare 우선 런타임",
    ],
    cloudflareTitle: "가볍게 시작하도록 설계",
    cloudflareBody:
      "먼저 하나의 Worker로 시작하고, 실제 필요가 생길 때만 D1, R2 또는 KV를 추가합니다.",
    statusReady: "템플릿 준비 완료",
    themeLabel: "색상 테마",
    themeSystem: "시스템",
    themeLight: "라이트",
    themeDark: "다크",
    languageLabel: "언어",
  },
};

export function isPublicLocale(value: string): value is PublicLocale {
  return publicLocales.some((locale) => locale === value);
}

export function localePath(locale: PublicLocale, path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return locale === defaultLocale
    ? normalizedPath
    : `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
}
