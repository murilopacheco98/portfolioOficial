import React, { useState } from "react";
import { Abas } from "../../components/Abas";
import { Sidebar } from "../../components/Sidebar";

export const Geral = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);

  const lightOn = on ? "bg-opacity-[1%]" : "bg-opacity-[95%]";
  const textOn = on ? "text-black" : "text-white";

  return (
    <div className="flex">
      <Sidebar
        explorer={explorer}
        setExplorer={setExplorer}
        setOn={setOn}
        on={on}
        menu={menu}
        setMenu={setMenu}
      />
      <div
        onClick={() => setMenu(false)}
        className={
          explorer
            ? `overflow-y-scroll relative mt-[25px] ${lightOn} ${textOn} h-[calc(100vh-25px)] bg-[#070419]`
            : `overflow-y-scroll relative mt-[25px] ${lightOn} ${textOn} h-[calc(100vh-25px)] bg-[#070419] `
        }
      >
        <Abas light={on} />
        <div className="font-semibold flex justify-center mt-[20px] mb-[10px] text-[20px]">
          Sobre mim
        </div>
        <div className="font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Estou em transição de área, ao
          decorrer curso de engenharia mecânica gostei bastante da área de
          programação e durante a pandemia vi a possibilidade de entrar na área,
          por isso me dediquei bastante e entrei no curso da Growdev de Full
          Stack Developer. <br /> Apesar da dificuldade sou apaixonado pela área
          e me dediquei bastante para estudar e montar meus projetos e portfólio
          e entrar na área de desenvolvimento.
        </div>
        <div className="font-semibold flex justify-center mt-[20px] mb-[10px] text-[20px]">
          Conhecimentos
        </div>
        <div className="font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          Front-end: Javascript, Typescript, React, Redux, Bootstrap, Tailwind,
          Material UI.
          <br />
          Back-end: Java, Spring Boot, Spring MVC, Spring Data, Spring Security,
          Oauth, JWT.
          <br />
          Banco de dados: Mysql, Postgresql e Redis.
          <br />
          Certificados Microsoft Azure: AZ-900, DP-900 e SC-900.
          <br />
          Tecnologias ágeis: Scrum Master e Green Belt Lean Six Sigma
        </div>
        <div className="font-semibold flex justify-center mt-[20px] mb-[10px] text-[20px]">
          Projetos
        </div>
        <div className="font-bold mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          1 - Sistema de clínica médica
        </div>
        <div className="mb-[15px] flex text-justify font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px]">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projeto criado por mim no qual
          tive como base o front do site da rede D'or e do back uma aplicação
          similar de um curso do Jdev treinamentos. O paciente vizualizar as
          informaçoes no site, agendar sua consulta de acordo com a
          especialidade ou médico que ela deseja e ver os resultados do
          atendimento, além da parte do médico e do adm.
        </div>
        <div className="font-bold mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          2 - CRUD de recados
        </div>
        <div className="mb-[15px] flex text-justify font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px]">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projeto desenvolvido na Growdev,
          no qual é possível cadastrar e logar no sistema. Além do crud é
          possível arquivar e desarquivar o recado, pesquisar um recados
          específico e a paginação.
        </div>
        <div className="font-bold mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          3 - Marvel API
        </div>
        <div className="mb-[15px] flex text-justify font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px]">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projeto desenvolvido na Growdev,
          no qual foi feito com base no que a marvel api disponibiliza. As
          informações da marvel estão dividas 6 cards, no qual cada card
          representaria uma seção, um exemplo dos heróis da marvel, que mostra
          todos os heróis em cards também, com barra de pesquisa e paginação,
          além de no click do card ser possível ver as informações específicas
          do personagem.
        </div>
        <div className="font-bold mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          4 - Sistema de vagas
        </div>
        <div className="mb-[15px] flex text-justify font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px]">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projeto que tem como objetivo conectar
          os candidatos, as empresas parceiras e a empresa que controla a
          aplicação. O candidato pode se cadastrar e logar no sistema, escolher
          as vagas disponíveis e se candidatar, após isso esperar a resposta e
          ver as vagas no qual ele se inscreveu.
        </div>
        <div className="font-semibold flex justify-center mt-[20px] mb-[10px] text-[20px]">
          Formação
        </div>
        <div className="mb-[40px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          FEV 2022 – FEV 2023 <br />
          <div className="font-bold mb-[5px]">
            Programa Full Stack Web developer - GROWDEV
          </div>
          Curso de programação focado do início ao avançado em react para
          front-end e spring-boot para back-end <br /> <br />
          MAIO 2018 <br />
          <div className="font-bold mb-[5px]">
            Universidade Federal da Grande Dourados Bacharelado em Engenharia
            Mecânica
          </div>
          Curso de engenharia mecânica focado em 4 frentes: transferência de
          calor, análise de materiais, mecânica dos fluidos e vibrações. Durante
          o curso foi onde conheci um pouco sobre programação, no qual eu
          utilizei para análise de vibrações (meu tcc foi sobre isso) e análise
          da mecânica dos fluidos.
        </div>
      </div>
    </div>
  );
};
