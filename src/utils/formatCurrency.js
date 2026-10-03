//formatador de moeda, baseado na linguagem.
//INTL - Internationalization (i18n), bliblioteca do JS
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', { //lingua
    style: 'currency', //estilo (moeda)
    currency: 'BRL' //moeda em si (BRL)
    //formatando espaços inquebráveis
  }).format(value).replace(/\u00A0|\u202F/g, ' ')
}