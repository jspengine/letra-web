# Constraints — Lançamento do Letra

## Técnicas

| Constraint | Detalhe | Impacto |
|------------|---------|---------|
| **Stack** | React 19 + TypeScript + Tailwind | Consistência com o produto principal |
| **Brand compliance** | Seguir brand-book.md em 100% do conteúdo | Qualidade visual garantida |
| **Performance** | LCP < 2.5s, CLS < 0.1, Lighthouse > 90 | SEO e experiência do usuário |
| **Acessibilidade** | WCAG 2.1 AA | Acesso universal |
| **Mobile-first** | Responsivo em 375px, 768px, 1024px | Maioria do tráfego é mobile |
| **SEO** | Meta tags, structured data, sitemap | Descoberta orgânica |

## De Negócio

| Constraint | Detalhe | Impacto |
|------------|---------|---------|
| **Timing** | Soft launch em 4 semanas, public em 6 | Cadência definida |
| **Budget** | Priorizar ferramentas free/open source | Custo controle |
| **Pricing** | Decidir antes do public launch | Posicionamento |

## Operacionais

| Constraint | Detalhe | Impacto |
|------------|---------|---------|
| **Conteúdo** | Todos os textos devem passar pelo voice check | Consistência da marca |
| **Assets** | Usar apenas assets aprovados no brand-book | Identidade visual |
| **Links** | Todos os links devem ser validados antes do launch | Confiabilidade |

## Decisões Tomadas ✅

| Decisão | Escolha | Justificativa |
|---------|---------|---------------|
| **Domínio** | `letra.dev` | Moderno, técnico, alinhado com developer tools |
| **Hospedagem** | Vercel | Melhor DX, edge functions, analytics integrado, gratuito para open source |
| **Analytics** | PostHog | Open source, auto-hosted, gratuito, privacy-friendly |
| **Community** | Discord | Mais popular para developer communities, real-time, bots |
| **Email service** | Resend | API moderna, DX excelente, gratuito para 100 emails/dia |

## Dependências Externas

| Dependência | Status | Próxima ação |
|-------------|--------|--------------|
| Domínio `letra.dev` | ✅ Decidido | Verificar disponibilidade e registrar |
| Hospedagem Vercel | ✅ Decidido | Criar conta e configurar projeto |
| Analytics PostHog | ✅ Decidido | Criar conta e configurar tracking |
| Community Discord | ✅ Decidido | Criar servidor e configurar canais |
| Email Resend | � Decidido | Criar conta e configurar domínio |

## Riscos Identificados

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| `letra.dev` indisponível | Baixa | Alto | Verificar agora e ter backup |
| Performance ruim em mobile | Média | Alto | Testar em devices reais |
| Conteúdo desalinhado com brand | Baixa | Médio | Voice check obrigatório |
| Waitlist com baixa conversão | Média | Alto | Testar CTA e copy |
