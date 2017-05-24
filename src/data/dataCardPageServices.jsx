import React from 'react';

import imgSite from '../assets/img/wordpress_moc.png';
import imgSiteLogo from '../assets/img/svg/idea.svg';
import imgWordpress from '../assets/img/wordpress_moc.png';
import imgWordpressLogo from '../assets/img/svg/wordpress.svg';
import imgFront from '../assets/img/wordpress_moc.png';
import imgFrontLogo from '../assets/img/svg/embed2.svg';

export default props => ({
  site: {
    name: 'Web Sites' , 
    image: imgSite ,
    logo: imgSiteLogo ,
    bgColor: 'web-sites' ,
    url: 'servicos/site',
    content: <div>
                <p>
                  Ter um site ainda é a melhor forma de divulgar sua empresa, produtos e serviços pela 
                  internet á um baixo custo e com rápido retorno sobre o investimento.
                </p><br/>
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
    image: imgWordpress ,
    logo: imgWordpressLogo ,
    bgColor: 'wordpress' ,
    url: 'servicos/wordpress',
    content: <div>
                <p>
                    O Wordpress é o melhor e mais utilizado sistema de gerenciamento 
                    de conteúdo no mercado, com ele você consegue disponibilizar o seu 
                    conteúdo para seus clientes de forma simples e fácil, sem a 
                    necessidade de conhecimentos técnicos.
                </p><br/>
                <p> 
                    Ideal para empresas que 
                    precisam fazer constantes atualizações de conteúdo.
                </p>
						  </div>
  } ,

  front: {
    name: 'Front End' , 
    image: imgFront ,
    logo: imgFrontLogo ,
    bgColor: 'front-end' ,
    url: 'servicos/frontend',
    content: <div>
							 <p>
                  Possuo sólidos conhecimentos em tecnologias front-end como HTML 5,
                  CSS 3, JavaScript e utilizo de ferramentas que me auxiliam na produtividade
                  e na produção de um código de qualidade como Bootstrap, Sass, React JS, Grunt,
                  entre outras.
							 </p><br/>
               <p>
                 Buscando sempre a melhor qualidade no desenvolvimento, entrego um
                 código semântico, documentado, compatível com os principais navegadores do mercado,
                 responsivo e que funciona em qualquer tamanho de tela e, com isso, 
                 pode-se garantir uma melhor experiência para o usuário final.
               </p>
						     
						 </div>
  } ,
})  

