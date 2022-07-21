import { ReactElement, useState } from 'react';

const MENU_ITEMS = {
  configurar: [
    {
      icon: "mdi:certificate",
      text: "Nome do Negócio",
      url: "/nome-do-negocio",
    },
    {
      icon: "mdi:link",
      text: "Endereço na Internet",
      url: "/endereco-na-internet",
    },
    {
      icon: "mdi:text-box-outline",
      text: "Descrição do Negócio",
      url: "/descricao-do-negocio",
    },
    {
      icon: "mdi:image-frame",
      text: "Logomarca do Negócio",
      url: "/logomarca-do-negocio",
    },
    {
      icon: "mdi:account-outline",
      text: "CPF/CNPJ",
      url: "/cpf-cnpj",
    },
    {
      icon: "akar-icons:location",
      text: "Endereço e Contato",
      url: "/endereco-e-contato",
    },
    {
      icon: "mdi:chat-outline",
      text: "Integração Whatsapp",
      url: "/integracao-whatsapp",
    },
    {
      icon: "mdi:instagram",
      text: "Redes Sociais",
      url: "/redes-sociais",
    },
    {
      icon: "mdi:credit-card-outline",
      text: "Formas de Pagamento",
      url: "/formas-de-pagamento",
    },
    {
      icon: "mdi:border-style",
      text: "Aparência da Loja",
      url: "/aparencia-da-loja",
    },
    {
      icon: "mdi:currency-usd",
      text: "Pedido Mínimo",
      url: "/pedido-minimo",
    },
    {
      icon: "mdi:card-search-outline",
      text: "Barra de Pesquisa",
      url: "/barra-de-pesquisa",
    },
    {
      icon: "bi:currency-dollar",
      text: "Frete Grátis",
      url: "/frete-gratis",
    },
  ],
  estoque: [
    // {
    //   icon: "akar-icons:shipping-box-v2",
    //   text: "Produtos do Estoque",
    //   url: "/produtos-do-estoque",
    // },
  ],
  mercadoPago: [
    {
      icon: "arcticons:mercado-libre",
      text: "Mercado Pago",
      url: "/integracao-mercado-pago",
    },
  ],
  mercadoPago_integracao: [
    {
      icon: "akar-icons:key",
      text: "Credenciais",
      url: "/credenciais",
    },
    {
      icon: "bi:currency-dollar",
      text: "Taxas",
      url: "/taxas",
    },
    {
      icon: "bx:like",
      text: "Termos de uso",
      url: "/termos-e-condicoes-de-uso",
    },
  ],
  avaliacoes: [
    {
      icon: "ant-design:star",
      text: "Avaliação",
      url: "/avaliacao",
    },
  ],
  entregas: [
    {
      icon: "ant-design:mail-outlined",
      text: "Envio pelos Correios",
      url: "/envio-pelos-correios",
    },
    {
      icon: "akar-icons:location",
      text: "Entrega Local",
      url: "/entrega-local",
    },
    {
      icon: "akar-icons:arrow-up-right",
      text: "Retirar na Loja",
      url: "/retirar-na-loja",
    },
  ],
  entregas_envioPelosCorreios: [
    {
      icon: "akar-icons:location",
      text: "CEP da loja",
      url: "/cep-da-loja",
    },
  ],
  produtos: [
    {
      icon: "akar-icons:shipping-box-v2",
      text: "Produtos",
      url: "/produtos",
    },
    {
      icon: "akar-icons:shipping-box-v2",
      text: "Estoque",
      url: "/produtos-do-estoque",
    },
    {
      icon: "akar-icons:shipping-box-v2",
      text: "Dimensões",
      url: "/dimensoes-dos-produtos",
    },
  ],
  entregas_entregaLocal: [
    {
      icon: "bi:truck",
      text: "Região de entrega",
      url: "/regiao-de-entrega",
    },
  ],
  entregas_retirarNaLoja: [
    {
      icon: "akar-icons:location",
      text: "Endereço da Loja",
      url: "/endereco-da-loja",
    },
  ],
  categorias: [
    {
      icon: "bx:photo-album",
      text: "Foto da Categoria",
      url: "/foto",
    },
    {
      icon: "ant-design:plus-circle-outlined",
      text: "Incluir/Excluir Produto",
      url: "/incluir-excluir-produto",
    },
    {
      icon: "akar-icons:edit",
      text: "Renomear",
      url: "/renomear",
    },
    {
      icon: "ant-design:delete-outlined",
      text: "Excluir",
      url: "/excluir",
    },
  ]
};

export default MENU_ITEMS;
