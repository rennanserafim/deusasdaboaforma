import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './SimpleAccordion.css'


export default function SimpleAccordion() {
  const accordionItems = [
    {
      title: "Depois da compra, como posso acessar o material?",
      content: "É muito simples, você receberá um e-mail da Hotmart com o acesso ao material. Basta você entrar na plataforma e baixar os arquivos."
    },
    {
      title: "Todos os produtos são digitais?",
      content: "Isso mesmo! Todos os produtos estão em formato PDF. Portanto, você pode acessar no seu computador, tablet ou celular."
    },
    {
      title: "Isso funciona mesmo?",
      content: "Várias alunas comprovam a eficácia do nosso método."
    },
    {
      title: "Quantos quilos perderei em 4 semanas?",
      content: "Depende da sua disciplina! Se você seguir à risca o plano proposto, você perderá muitos quilos de forma rápida."
    },
    {
      title: "E se eu me arrepender da compra?",
      content: "É simples, basta mandar uma mensagem para nossa equipe dentro dos 7 dias da garantia que nós devolveremos todo o seu dinheiro de volta!"
    },
    {
      title: "Existe algum suporte?",
      content: "Claro, existe sim! Estamos à disposição para ajudar e tirar qualquer dúvida das nossas alunas!"
    },
  ];

  return (
    <div className='accordionDiv'>
      {accordionItems.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='contentAccordion'>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
