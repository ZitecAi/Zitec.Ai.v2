import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Banknote,
  Brain,
  Building2,
  CheckCircle2,
  DatabaseZap,
  ExternalLink,
  FileCheck2,
  FileSignature,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  X,
} from "lucide-react";

import { MotionReveal } from "@/components/landing/Motion";
import { WireframeLandscape } from "@/components/landing/WireframeLandscape";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { assetPath } from "@/lib/assets";

const navItems = [
  { label: "Quem Somos", target: "quem-somos" },
  { label: "Infraestrutura", target: "infraestrutura" },
  { label: "Plataformas", target: "plataformas" },
  { label: "Propósito", target: "proposito" },
  { label: "Contato", target: "contato" },
];

const PLATFORMS_PATH = "/plataformas";

const services = [
  {
    icon: DatabaseZap,
    title: "Sistema de Recebíveis para FIDC",
    description:
      "Gestão do lastro, conciliação de recebíveis, acompanhamento de performance e controle das operações, com aderência às exigências regulatórias dos FIDCs.",
  },
  {
    icon: FileCheck2,
    title: "Gestão e Registro de Fundos",
    description:
      "Controle operacional e registro de fundos com rastreabilidade das informações, segurança dos dados e conformidade regulatória.",
  },
  {
    icon: Building2,
    title: "Administração de Fundos",
    description:
      "Automação dos processos de administração fiduciária, visão consolidada das operações e suporte à governança e à transparência.",
  },
  {
    icon: FileSignature,
    title: "Assinatura Digital",
    description:
      "Formalização eletrônica de contratos com validade jurídica, integração aos fluxos operacionais e ganho de eficiência nos processos.",
  },
  {
    icon: ShieldCheck,
    title: "Escrituração de Nota Comercial",
    description:
      "Escrituração, controle e acompanhamento das notas comerciais, com gestão centralizada dos eventos e informações.",
  },
  {
    icon: Landmark,
    title: "Sistema Bancário",
    description:
      "Processamento de transações, integração com o sistema financeiro e suporte a operações bancárias e de crédito.",
  },
];

const platforms = [
  {
    name: "ZiGestão",
    domain: "zigestao.zitec.ai",
    url: "https://zigestao.zitec.ai",
    logo: assetPath("images/platforms/zigestao-logo.png"),
    logoClassName: "max-h-12 max-w-full object-contain",
    description: "Plataforma para gestão operacional, controle e acompanhamento de fundos.",
  },
  {
    name: "ZiSign",
    domain: "zisign.ai",
    url: "https://zisign.ai",
    logo: assetPath("images/platforms/zisign-logo.png"),
    logoClassName: "max-h-12 max-w-full object-contain",
    description: "Solução de assinatura digital e eletrônica integrada aos fluxos financeiros.",
  },
  {
    name: "Portal IDSF",
    domain: "idsf.com.br",
    url: "https://idsf.com.br",
    logo: assetPath("images/platforms/portal-idsf-logo.png"),
    logoClassName: "max-h-9 max-w-full object-contain",
    description: "Portal para relacionamento, operação e acesso a serviços financeiros.",
  },
];

const metrics = [
  { value: "800+", label: "Canais gerenciados" },
  { value: "2.000+", label: "Clientes" },
  { value: "13,1 bi+", label: "de custódia processados" },
  { value: "21 mi+", label: "de linhas processadas por dia" },
];

const values = [
  "Inovação: pensar à frente e criar soluções que antecipam as demandas do mercado.",
  "Precisão: garantir excelência técnica e confiabilidade total em cada entrega.",
  "Parceria: crescer junto aos clientes, entendendo suas operações e desafios.",
  "Integridade: agir com ética, transparência e responsabilidade.",
  "Eficiência: simplificar o complexo e otimizar processos por meio da tecnologia.",
];

const pressContacts = [
  { name: "Imprensa", email: "imprensa@zitec.ai" },
  { name: "Beatriz Ferzelli", email: "Beatriz@ferzelli.com", phone: "(11) 94158-9969" },
  { name: "Elissa Ferzelli", email: "Elissa@ferzelli.com", phone: "(11) 94719-3668" },
  { name: "Agnes Ferzelli", email: "Agnes@ferzelli.com", phone: "(41) 8807-4403" },
];

function scrollToSection(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function navigateToPath(path: string) {
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateToHomeSection(target?: string) {
  if (window.location.pathname !== "/") {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  window.setTimeout(() => {
    if (target) {
      scrollToSection(target);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (target: string) => {
    if (target === "plataformas") {
      navigateToPath(PLATFORMS_PATH);
      setIsOpen(false);
      return;
    }

    navigateToHomeSection(target);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/90 text-foreground shadow-sm backdrop-blur-xl">
      <div className="container">
        <div className="flex h-16 items-center justify-between md:h-20">
          <button
            aria-label="Voltar ao início"
            className="flex items-center"
            onClick={() => navigateToHomeSection()}
          >
            <img src={assetPath("images/zitec-logo.png")} alt="Zitec" className="h-11 w-auto md:h-14" />
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavigate(item.target)}
                className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => navigateToHomeSection("contato")}>
              Fale Conosco
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm transition hover:bg-primary-hover md:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="grid gap-2 border-t border-border py-4 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavigate(item.target)}
                className="rounded-md px-2 py-3 text-left text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:bg-muted hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

function PlatformCard({ platform, index = 0 }: { platform: (typeof platforms)[number]; index?: number }) {
  return (
    <MotionReveal delay={index * 90} effect="up">
      <a
        href={platform.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Acessar ${platform.name}`}
        className="group block h-full rounded-lg border border-border bg-card p-6 text-card-foreground shadow-md transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-xl"
      >
        <div className="mb-6 flex items-start justify-between gap-5">
          <div className="flex h-16 w-40 max-w-full items-center justify-center rounded-lg bg-white px-4 shadow-sm">
            <img
              src={platform.logo}
              alt={`Logo ${platform.name}`}
              className={`${platform.logoClassName} platform-logo-filter`}
              loading="lazy"
            />
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-accent" />
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{platform.description}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-accent">
          Acessar plataforma
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </a>
    </MotionReveal>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 text-white md:pt-20">
      <div className="absolute inset-0">
        <WireframeLandscape />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,40,20,0.88),rgba(17,78,32,0.58)_48%,rgba(8,18,13,0.68))]" />
        <div className="absolute inset-0 dark-grid-pattern opacity-35" />
      </div>

      <div className="container relative z-10 grid min-h-[64svh] items-center py-12 md:py-16">
        <div className="max-w-4xl">
          <MotionReveal effect="down">
            <span className="inline-flex items-center gap-2 border-l-2 border-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              IA-First Fintech
            </span>
          </MotionReveal>

          <MotionReveal delay={90}>
            <h1 className="mt-6">
              <img
                src={assetPath("images/zitec-logo-hero.png")}
                alt="Zitec"
                className="hero-brand-logo"
                width={774}
                height={583}
                decoding="async"
              />
            </h1>
          </MotionReveal>

          <MotionReveal delay={180}>
            <p className="mt-7 max-w-2xl break-words text-lg font-semibold uppercase leading-tight text-white/90 md:text-3xl">
              IA-First Fintech para o ecossistema de fundos e serviços financeiros em uma única plataforma
            </p>
          </MotionReveal>

          <MotionReveal delay={280} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => scrollToSection("quem-somos")}>
              Conheça a Zitec
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary" onClick={() => scrollToSection("infraestrutura")}>
              Ver infraestrutura
            </Button>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="quem-somos" className="section-spacing bg-secondary">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <MotionReveal effect="left">
            <div className="section-kicker">Quem Somos</div>
            <h2 className="section-title mt-4 max-w-md">
              Tecnologia própria para simplificar operações financeiras complexas.
            </h2>
          </MotionReveal>

          <MotionReveal effect="right" delay={120}>
            <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
              <p>
                A Zitec nasceu unindo Inteligência Artificial, tecnologia avançada e engenharia de alto
                padrão para criar produtos e soluções de ponta para todo o ecossistema financeiro.
              </p>
              <p>
                Incubada dentro da ID Corretora, a empresa criou um sistema próprio que unifica,
                automatiza e simplifica toda a operação de fundos de investimento: da administração à
                gestão, da custódia à auditoria, conectando todos os agentes envolvidos em um único
                ambiente digital.
              </p>
              <p>
                Em menos de dois anos, a Zitec se consolidou como uma IA-First Fintech, com
                infraestrutura tecnológica eficiente, com soluções para fundos, banking, assinaturas
                digitais e outros produtos financeiros.
              </p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

function InfrastructureSection() {
  return (
    <section id="infraestrutura" className="section-spacing bg-background">
      <div className="container">
        <MotionReveal className="mx-auto mb-14 max-w-3xl text-center">
          <div className="section-kicker justify-center">Infraestrutura completa</div>
          <h2 className="section-title mt-4">
            Para fundos e serviços financeiros operarem em uma única plataforma.
          </h2>
        </MotionReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionReveal key={service.title} delay={index * 70} effect="up">
                <Card className="premium-card h-full p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold uppercase leading-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.description}</p>
                </Card>
              </MotionReveal>
            );
          })}
        </div>

        <MotionReveal delay={220} className="mt-16">
          <Card className="premium-card overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[0.62fr_0.38fr]">
              <div className="p-6 md:p-8">
                <div className="section-kicker">Plataformas desenvolvidas</div>
                <h3 className="mt-3 text-2xl font-semibold uppercase leading-tight text-foreground md:text-3xl">
                  Conheça o ecossistema digital Zitec
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                  Um módulo separado reúne as plataformas criadas para gestão, assinatura e relacionamento operacional.
                </p>
                <Button className="mt-6" onClick={() => navigateToPath(PLATFORMS_PATH)}>
                  Ver plataformas
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4 border-t border-border bg-primary/5 p-6 md:p-8 lg:border-l lg:border-t-0">
                {platforms.map((platform) => (
                  <div key={platform.domain} className="flex h-16 w-32 items-center justify-center rounded-lg bg-white px-3 shadow-sm">
                    <img src={platform.logo} alt={`Logo ${platform.name}`} className={platform.logoClassName} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </MotionReveal>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gradient-dark py-10 text-white">
      <WireframeLandscape compact className="opacity-40" />
      <div className="absolute inset-0 bg-primary-dark/70" />
      <div className="container relative z-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MotionReveal key={metric.label} delay={index * 70} effect="zoom">
              <div className="metric-tile">
                <div className="text-4xl font-bold leading-none text-accent md:text-5xl">
                  {metric.value}
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  {metric.label}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section id="proposito" className="relative overflow-hidden bg-primary-dark text-white">
      <div className="absolute inset-0">
        <WireframeLandscape compact />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,78,32,0.9),rgba(26,34,28,0.96))]" />
      </div>

      <div className="container relative z-10 py-20 lg:py-28">
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <div className="section-kicker justify-center text-white/70">Nosso Propósito</div>
          <h2 className="mt-5 text-3xl font-bold uppercase leading-tight md:text-5xl">
            Transformar a maneira como o mercado financeiro opera.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Tecnologia própria, integrada e segura para eliminar complexidades, elevar a
            eficiência e garantir total confiabilidade em cada processo.
          </p>
          <p className="mt-4 text-base font-semibold text-white">
            Porque tecnologia e finanças devem caminhar juntas: de forma simples, ágil e inteligente.
          </p>
        </MotionReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <MotionReveal delay={90} effect="up">
            <Card className="h-full border-white/10 bg-primary-dark/80 p-6 text-white shadow-lg backdrop-blur-md">
              <Brain className="h-8 w-8 text-accent" />
              <h3 className="mt-5 text-2xl font-semibold uppercase text-white">Missão</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Desenvolver soluções tecnológicas inteligentes que simplifiquem e fortaleçam as
                operações do mercado financeiro, oferecendo eficiência, integração e segurança.
              </p>
            </Card>
          </MotionReveal>

          <MotionReveal delay={180} effect="up">
            <Card className="h-full border-white/10 bg-primary-dark/80 p-6 text-white shadow-lg backdrop-blur-md">
              <Network className="h-8 w-8 text-accent" />
              <h3 className="mt-5 text-2xl font-semibold uppercase text-white">Visão</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Ser referência em tecnologia para o setor financeiro, reconhecida pela capacidade de
                transformar a gestão de investimentos em um processo ágil, transparente e digital.
              </p>
            </Card>
          </MotionReveal>

          <MotionReveal delay={270} effect="up">
            <Card className="h-full border-white/10 bg-primary-dark/80 p-6 text-white shadow-lg backdrop-blur-md">
              <Banknote className="h-8 w-8 text-accent" />
              <h3 className="mt-5 text-2xl font-semibold uppercase text-white">Valores</h3>
              <ul className="space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex gap-3 text-sm leading-6 text-white/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

function PlatformsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="relative overflow-hidden border-b border-white/10 bg-primary-dark text-white">
          <WireframeLandscape className="platforms-hero-background" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,40,20,0.88),rgba(17,78,32,0.5)_52%,rgba(8,18,13,0.42))]" />
          <div className="container relative z-10 py-16 md:py-20">
            <Button variant="secondary" onClick={() => navigateToHomeSection("infraestrutura")}>
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            <MotionReveal className="mt-10 max-w-4xl">
              <div className="section-kicker text-white/70">Plataformas desenvolvidas</div>
              <h1 className="mt-5 text-4xl font-bold uppercase leading-tight md:text-6xl">
                Ecossistema digital Zitec
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Plataformas criadas para conectar gestão, assinatura e relacionamento operacional em uma infraestrutura integrada.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container">
            <div className="grid gap-5 md:grid-cols-3">
              {platforms.map((platform, index) => (
                <PlatformCard key={platform.domain} platform={platform} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="section-spacing bg-secondary">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
          <MotionReveal effect="left">
            <div className="section-kicker">Contato</div>
            <h2 className="section-title mt-4">Fale com a Zitec</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Atendimento para imprensa, relacionamento institucional e contatos gerais da empresa.
            </p>
          </MotionReveal>

          <div className="grid gap-5 md:grid-cols-2">
            <MotionReveal delay={90} effect="up">
              <Card className="premium-card h-full p-6">
                <Mail className="mb-5 h-7 w-7 text-primary" />
                <h3 className="text-xl font-semibold uppercase">Contato para imprensa</h3>
                <div className="mt-5 space-y-4">
                  {pressContacts.map((contact) => (
                    <div key={contact.email} className="border-l-2 border-accent/70 pl-4">
                      <p className="text-sm font-semibold text-foreground">{contact.name}</p>
                      <a
                        className="break-words text-sm text-primary hover:underline"
                        href={`mailto:${contact.email}`}
                      >
                        {contact.email}
                      </a>
                      {contact.phone && (
                        <p className="text-sm text-muted-foreground">{contact.phone}</p>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </MotionReveal>

            <MotionReveal delay={180} effect="up">
              <Card className="premium-card h-full p-6">
                <MapPin className="mb-5 h-7 w-7 text-primary" />
                <h3 className="text-xl font-semibold uppercase">Fale conosco</h3>
                <a className="mt-5 block text-lg font-semibold text-primary hover:underline" href="mailto:contato@zitec.ai">
                  contato@zitec.ai
                </a>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  Av. Pres. Juscelino Kubitschek, 1726 - 7º Andar - Conjunto 74 - Vila Nova
                  Conceição, São Paulo - SP, 04543-000
                </p>
                <div className="mt-6 flex gap-3">
                  <a
                    aria-label="Instagram da Zitec"
                    className="social-link"
                    href="https://www.instagram.com/zitec.ai?igsh=MWZ5dXQwaHUzdzg5dA=="
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    aria-label="LinkedIn da Zitec"
                    className="social-link"
                    href="https://www.linkedin.com/company/zitec-ai/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </Card>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary-dark py-8 text-white">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <img src={assetPath("images/zitec-logo.png")} alt="Zitec" className="h-12 w-fit brightness-0 invert" />
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.slice(0, 3).map((item) => (
            <button
              key={item.target}
              onClick={() =>
                item.target === "plataformas"
                  ? navigateToPath(PLATFORMS_PATH)
                  : navigateToHomeSection(item.target)
              }
              className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <p className="text-sm text-white/60">© 2025 ZITEC. Todos os Direitos Reservados.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  if (path === PLATFORMS_PATH) {
    return <PlatformsPage />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <InfrastructureSection />
        <MetricsSection />
        <PurposeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
