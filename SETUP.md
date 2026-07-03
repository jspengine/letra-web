# Setup — CI/CD Infrastructure

## Pré-requisitos

1. **Conta no GitHub** — para hospedar o repositório
2. **Conta na Vercel** — para deploy (gratuita em vercel.com)
3. **Domínio `letra.dev`** — opcional, pode usar domínio .vercel.app

## Deploy na Vercel

### Opção A: Vercel for GitHub (recomendado — zero config)

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe o repositório GitHub
3. Framework: Vite
4. Root directory: `landing/`
5. Build: `npm run build`
6. Output: `dist`
7. Clique em "Deploy"

Pronto. Toda PR gera preview URL automaticamente. Toda push na main faz deploy em produção.

### Opção B: GitHub Actions (nosso setup atual)

Para usar o workflow em `.github/workflows/ci.yml`, configure estes secrets no repositório GitHub:

| Secret | Onde obter | Descrição |
|--------|-----------|-----------|
| `VERCEL_TOKEN` | Vercel → Settings → Tokens | Token de API da Vercel |
| `VERCEL_ORG_ID` | Vercel → Settings → General | ID da organização |
| `VERCEL_PROJECT_ID` | Vercel → Project → Settings | ID do projeto na Vercel |

Para obter `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID`:
```bash
npx vercel link
# depois veja em .vercel/project.json
```

## Estrutura

```
lancamento-letra/
├── .github/workflows/ci.yml   # CI/CD pipeline
├── landing/                    # Código do site
│   ├── dist/                   # Build output (gitignored)
│   ├── public/                 # Páginas estáticas
│   │   ├── brand/              # Brand site
│   │   ├── docs/               # Documentação
│   │   └── blog/               # Blog
│   └── src/                    # React app
├── vercel.json                 # Config Vercel
├── package.json                # Root scripts
└── .gitignore                  # Git ignore
```
