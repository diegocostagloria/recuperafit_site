# Instruções para Implantação do Site RecuperaFit

Este pacote contém o código completo do site RecuperaFit com todas as atualizações visuais e correções funcionais implementadas. Abaixo estão as instruções para implantar o site em diferentes plataformas.

## Opção 1: Implantação na Vercel (Recomendado)

A Vercel é a plataforma ideal para sites Next.js, oferecendo implantação simples e otimizada.

1. Crie uma conta em [vercel.com](https://vercel.com) se ainda não tiver
2. Instale o Git em seu computador se ainda não estiver instalado
3. Crie um novo repositório no GitHub, GitLab ou Bitbucket
4. Descompacte este pacote e inicialize um repositório Git:
   ```
   git init
   git add .
   git commit -m "Versão inicial do site RecuperaFit"
   git remote add origin [URL_DO_SEU_REPOSITORIO]
   git push -u origin main
   ```
5. Na Vercel, clique em "Add New" > "Project"
6. Importe o repositório que você acabou de criar
7. Mantenha as configurações padrão e clique em "Deploy"
8. Após a implantação, a Vercel fornecerá um URL para seu site

## Opção 2: Implantação na Netlify

1. Crie uma conta em [netlify.com](https://netlify.com) se ainda não tiver
2. Faça login e clique em "Add new site" > "Import an existing project"
3. Conecte sua conta do GitHub, GitLab ou Bitbucket
4. Selecione o repositório onde você enviou o código (veja os passos 3-4 da Opção 1)
5. Configure as seguintes opções:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Clique em "Deploy site"

## Opção 3: Implantação no Cloudflare Pages

1. Crie uma conta no Cloudflare se ainda não tiver
2. Acesse o painel do Cloudflare e vá para "Pages"
3. Clique em "Create a project" > "Connect to Git"
4. Conecte sua conta do GitHub, GitLab ou Bitbucket
5. Selecione o repositório onde você enviou o código
6. Configure as seguintes opções:
   - Build command: `npm run build`
   - Build output directory: `out`
7. Clique em "Save and Deploy"

## Configuração de Domínio Personalizado

Após a implantação, você pode configurar um domínio personalizado:

1. Adquira um domínio em um registrador de sua preferência (GoDaddy, Namecheap, Registro.br, etc.)
2. Na plataforma onde você implantou o site (Vercel, Netlify ou Cloudflare):
   - Vá para as configurações do projeto
   - Procure a seção "Domains" ou "Custom domains"
   - Adicione seu domínio e siga as instruções para configurar os registros DNS

## Atualizações Futuras

Para atualizar o site no futuro:

1. Faça as alterações necessárias no código
2. Commit e push para o repositório:
   ```
   git add .
   git commit -m "Descrição das alterações"
   git push
   ```
3. A plataforma detectará as mudanças e reimplantará automaticamente o site

## Suporte

Se precisar de ajuda adicional com a implantação, entre em contato com o suporte da plataforma escolhida ou consulte um desenvolvedor web.
