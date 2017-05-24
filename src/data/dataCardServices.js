import imgWebSite from '../assets/img/site.jpg';
import imgWordpress from '../assets/img/wordpress.jpg';
import imgFrontEnd from '../assets/img/frontend.jpg';
import imgLanding from '../assets/img/landing.jpg';
import imgAndroid from '../assets/img/app.jpg';
import imgInterface from '../assets/img/interface.jpg';

const dataCardServices = [
  {
    name : "Web Sites" , 
    imageSrc : imgWebSite , 
    content : "Criação de sites de acordo com as necessidades específicas do cliente. Design personalizado e codifição que segue as diretivas dos padrões web." ,
    labelButton : "Saiba mais ..." ,
    linkTo : "/servicos/site" , 
    bgImageBox: "bg-site"
  } ,
  {
    name : "Wordpress" , 
    imageSrc : imgWordpress , 
    content : "Precisa de um site que lhe possibilite fazer atualizações frequentes sem a necessidade de ter conhecimentos técnicos? Essa é a melhor opção para você." ,
    labelButton : "Saiba mais ..." , 
    linkTo : "/servicos/wordpress" ,
    bgImageBox: "bg-wordpress"
  } ,
  
  {
    name : "Front End" , 
    imageSrc : imgFrontEnd , 
    content : "Serviço voltado para designers freelancer e agencias que produzem todo o layout, mas precisam de uma mãozinha na hora da codificação." ,
    labelButton : "Saiba mais ..." ,
    linkTo : "/servicos/frontend" ,
    bgImageBox: "bg-frontend"
  } ,
  {
    name : "Landing Pages" , 
    imageSrc : imgLanding , 
    content : "As Landing Pages possui um único objetivo, gerar conversões. Dê uma alavancada na sua estratégia de marketing digital com esse serviço." ,
    labelButton : "Saiba mais ..." ,
    linkTo : "/servicos/landing" ,
    bgImageBox: "bg-landing"
  } ,
  {
    name : "Aplicativos" , 
    imageSrc : imgAndroid , 
    content : "Fortaleça a sua marca com seus clientes e seja visível em todos os momentos" ,
    labelButton : "Saiba mais ..." ,
    linkTo : "/servicos/aplicativos" ,
    bgImageBox: "bg-app"
  } ,
  {
    name : "Design de Interfaces" , 
    imageSrc : imgInterface , 
    content : "Soluções em interfaces simples e flúidas, oferecendo uma melhor experiência de uso para os seus usuários." ,
    labelButton : "Saiba mais ..." ,
    linkTo : "/servicos/aplicativos" ,
    bgImageBox: "bg-app"
  } 
];

export default dataCardServices;