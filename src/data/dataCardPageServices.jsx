import React from 'react';

import bgSite from '../assets/img/service_site.jpg';
import bgWordpress from '../assets/img/service_wordpress.jpg';
import bgFrontend from '../assets/img/service_frontend.jpg';
import bgInterface from '../assets/img/service_interface.jpg';
import bgLanding from '../assets/img/service_landing.jpg';

export default props => ({
  site: {
    name: 'Web Sites' , 
    logo: bgSite ,
    url: 'servicos/site',
    content: <div>
                <p>
                  Desenvolvo sites responsivos, atraentes e funcionais, que se 
                  adaptam as mais variadas telas, mantendo a sua qualidade visual e 
                  usabilidade simples a fim de atender clientes cada vez mas exigentes 
                  e conectados.
                </p>
            </div>
  } ,

  wordpress: {
    name: 'Wordpress' , 
    logo: bgWordpress ,
    url: 'servicos/wordpress',
    content: <div>
                <p>
                    O Wordpress é o melhor e mais utilizado sistema de gerenciamento 
                    de conteúdo no mercado, com ele você consegue disponibilizar o seu 
                    conteúdo para seus clientes de forma simples e fácil, sem a 
                    necessidade de conhecimentos técnicos.
                </p>
               
						  </div>
  } ,

  front: {
    name: 'Front End' , 
    logo: bgFrontend ,
    url: 'servicos/frontend',
    content: <div>
							 <p>
                 Buscando sempre a melhor qualidade no desenvolvimento, entrego um
                 código semântico, documentado, compatível com os principais navegadores do mercado,
                 responsivo e que funciona em qualquer tamanho de tela e, com isso, 
                 pode-se garantir uma melhor experiência para o usuário final.
               </p>
						     
						 </div>
  } ,

   landing: {
    name: 'Landing Page' , 
    logo: bgLanding ,
    url: 'servicos/landing',
    content: <div>
							 <p>
                 Exponha a sua oferta para seus clientes em potêncial com uma pagina de 
                 conversão eficiente. As Landing Pages tem o poder de transformar visitantes 
                 em clientes para a sua empresa.
               </p>
						     
						 </div>
  } ,
})  

