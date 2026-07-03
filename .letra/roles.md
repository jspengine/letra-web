# Roles & Responsabilidades — Lançamento do Letra

## Time do Lançamento

### 🎯 Product Owner (PO)
**Responsável por:** Decisões de produto, priorização, validação final

| Atividade | Responsabilidade |
|-----------|------------------|
| Definir escopo do lançamento | PO decide o que entra e o que fica de fora |
| Priorizar features | PO define ordem de execução |
| Validar conteúdo | PO aprova textos, demos, positioning |
| Tomar decisões de pricing | PO define modelo de negócio |
| Aprovar launch final | PO dá o "go/no-go" |

**Decisões exclusivas do PO:**
- Pricing model
- Feature scope do launch
- Timeline final
- Partnerships e integrações

---

### 🎨 Designer
**Responsável por:** Visual identity, UX, assets

| Atividade | Responsabilidade |
|-----------|------------------|
| Brand compliance | Garantir que tudo segue brand-book.md |
| Wireframes e mockups | Criar layouts antes da implementação |
| UI components | Definir design system |
| Assets visuais | Criar imagens, ícones, logos |
| Mobile responsive | Garantir experiência mobile |

**Entregas do Designer:**
- Wireframes de baixa fidelidade
- Mockups de alta fidelidade
- Assets para social media
- Brand guidelines implementation

---

### 💻 Developer (Full-stack)
**Responsável por:** Implementação técnica, deploy, performance

| Atividade | Responsabilidade |
|-----------|------------------|
| Setup do projeto | Criar repo, configurações, CI/CD |
| Implementar landing page | Código limpo, performático |
| Integrar waitlist | Formulário + Resend + backend |
| Configurar analytics | PostHog setup e tracking |
| Deploy na Vercel | Domínio, SSL, performance |
| SEO technical | Meta tags, sitemap, structured data |

**Entregas do Developer:**
- Código fonte limpo e documentado
- Deploy funcional em produção
- Performance otimizada (Lighthouse > 90)
- Acessibilidade (WCAG 2.1 AA)

---

### 📝 Content Writer
**Responsável por:** Conteúdo, copy, documentação

| Atividade | Responsabilidade |
|-----------|------------------|
| Hero copy | Headlines e subheadlines |
| Blog post de lançamento | Artigo completo (1500+ palavras) |
| Social media content | Posts para Twitter, LinkedIn |
| Email sequence | 3 emails de lançamento |
| Documentação técnica | Getting started, guides |

**Entregas do Content Writer:**
- Copy aprovado pelo PO
- Blog post publicado
- 10+ posts de social media
- 3 emails de lançamento

---

### 📊 Growth/Marketing
**Responsável por:** Distribuição, métricas, conversão

| Atividade | Responsabilidade |
|-----------|------------------|
| Canal strategy | Definir onde divulgar |
| Community building | Criar e moderar Discord |
| Launch checklist | Executar ação por ação |
| Analytics dashboard | Monitorar métricas |
| Conversion optimization | Melhorar taxa de conversão |

**Entregas do Growth/Marketing:**
- Calendar de conteúdo
- Dashboard de métricas
- Relatórios semanais
- Otimizações de conversão

---

## Matriz de Responsabilidades (RACI)

| Atividade | PO | Designer | Developer | Writer | Growth |
|-----------|:--:|:--------:|:---------:|:------:|:------:|
| Definir escopo | **R/A** | C | C | I | I |
| Brand compliance | I | **R/A** | C | C | I |
| Wireframes | A | **R** | C | I | I |
| Implementar landing | A | C | **R** | I | I |
| Copy e conteúdo | A | I | I | **R** | C |
| Waitlist form | A | I | **R** | I | C |
| Analytics setup | A | I | **R** | I | C |
| Social media | A | C | I | C | **R** |
| Community Discord | A | I | I | I | **R** |
| Launch checklist | **R/A** | C | C | C | C |

**R** = Responsible (executa)  
**A** = Accountable (aprova)  
**C** = Consulted (consultado)  
**I** = Informed (informado)

---

## Fluxo de Trabalho

```
1. PO define prioridade
   ↓
2. Designer cria wireframe/mockup
   ↓
3. Developer implementa
   ↓
4. Writer cria conteúdo
   ↓
5. Growth distribui
   ↓
6. PO valida e aprova
```

## Rituals

| Ritual | Frequência | Participantes | Duração |
|--------|------------|---------------|---------|
| Standup diário | Diário | Todos | 15 min |
| Sprint planning | Semanal | Todos | 1 hora |
| Review & demo | Semanal | Todos | 30 min |
| Retro | Semanal | Todos | 30 min |
| Launch review | No launch | Todos | 1 hora |

## Escalação

| Problema | Escalar para | Tempo |
|----------|--------------|-------|
| Bloqueio técnico | Developer lead | 30 min |
| Decisão de produto | PO | 1 hora |
| Questão de brand | Designer | 30 min |
| Crise de conteúdo | Writer + PO | 1 hora |
| Bug em produção | Developer | 15 min |
