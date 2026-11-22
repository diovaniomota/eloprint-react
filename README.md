# Eloprint — recriação em React

Recriação do site Wix **Eloprint** (https://dartsoftt.wixsite.com/eloprint) em React + Vite.

## Como rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão final na pasta dist/
npm run preview  # testa a versão final
```

Precisa do Node.js 18 ou mais novo.

## Páginas

| Rota          | Página no Wix                         |
|---------------|----------------------------------------|
| `/`           | Início (home)                          |
| `/quem-somos` | Quem somos (no Wix era `/blank-1`; `/blank-1` redireciona para cá) |

"Equipamentos" no menu rola até a seção `#equipamentos` da home, e "Contato" / botões amarelos abrem o WhatsApp (mesmos links do Wix).

## Estrutura

```
src/
  main.jsx, App.jsx        rotas e escala do layout no celular
  data/site.js             links, endereço, telefones, menu
  components/              Header, Footer, MobileMenu, ContactForm, LogoMarquee, Slideshow
  pages/                   Home, QuemSomos (+ CSS de cada uma)
  styles/                  fontes e estilos globais
  assets/img, assets/fonts imagens e fontes baixadas do site (nada vem do CDN do Wix)
```

## O que é diferente do Wix

- **Formulário "Pronto para o próximo passo?"**: ao clicar em Enviar, abre o WhatsApp (48 99696-3218) com os dados já
  escritos na mensagem e envia os mesmos dados por e-mail para `contato@eloprintcopiadoras.com.br` usando o FormSubmit
  (https://formsubmit.co, grátis e sem conta). **Ativação:** no primeiro envio, o FormSubmit manda um e-mail de
  confirmação para contato@eloprintcopiadoras.com.br — clique no link uma vez; só depois disso os contatos começam a chegar.
  Número e e-mail ficam em `src/data/site.js`.
- **Fontes**: Roboto (Regular, Medium e Bold) é a mesma do Wix e tem licença livre. O telefone no rodapé usava
  "Brandon Grotesque" e o botão "Enviar" usava "Avenir", que são pagas: aqui o telefone usa Roboto Light e o botão usa o Avenir do Mac
  (em outros sistemas cai no Roboto Bold).
- **Celular**: igual ao Wix, o layout de celular é desenhado em 320px e escalado para a largura da tela. Na página
  "Quem somos" no celular o Wix cortava o texto atrás do formulário; aqui o texto aparece inteiro.
- Faixa "This website was built on Wix" (plano grátis) não foi incluída.
- Slideshow de equipamentos e faixa de logos de clientes foram refeitos em React (autoplay, setas ao passar o mouse).
