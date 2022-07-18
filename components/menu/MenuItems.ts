import { ReactElement, useState } from 'react';

const MENU_ITEMS = {
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
    {
      icon: "bi:currency-dollar",
      text: "Frete Grátis",
      url: "/frete-gratis",
    },
  ],
  entregas_envioPelosCorreios: [
    {
      icon: "akar-icons:location",
      text: "CEP da loja",
      url: "/cep-da-loja",
    },
    {
      icon: "akar-icons:shipping-box-v2",
      text: "Dimensões dos produtos",
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
};

export default MENU_ITEMS;
