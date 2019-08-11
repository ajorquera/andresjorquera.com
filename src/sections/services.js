import React from 'react';
import Section from '@components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import macImg from '@images/imac.png'

export default () => {
    const services = [
        {
            title: 'Planificacion Continua', 
            description: 'Trabajamos de la mano semana a semana para saber el presente y el futuro de tu producto.', 
            icon: 'list'
        },
        {
            title: 'Traducción lenguaje Negocio / Técnico', 
            description: 'Explicamos a detalle como se refleja las especificaciones de negocio con los requerimientos tecnicos.', 
            icon: 'robot'
        },
        {
            title: 'Últimas tecnologías', 
            description: 'Utilizamos las ultimas tecnologias para tu producto. Serverless, Angular, React, Google Cloud son algunos de los terminos actuales.', 
            icon: 'rocket'
        },
        {
            title: 'Costo ≈ $0', 
            description: 'La tecnologia y el mercado actual permite que los costos de mantenimiento sean mínimos, en algunos casos GRATIS.', 
            icon: 'dollar-sign'
        },
    ]


    return (
        <Section color="green">
            <h2 className="font-weight-bolder text-center">Services</h2>
            <p className="text-center">I want to explin here things to see how it looks</p>
            <div className="row">
                <div className="col-12 col-md-6">
                    <ul className="list-group list-group-flush">
                        {services.map(service => (
                            <li className="list-group-item bg-transparent border-0 px-0">
                                <div className="row ">
                                    <div className="col-2 align-self-center text-center">
                                        <FontAwesomeIcon color="#34495E" size="4x" icon={service.icon} />
                                    </div>
                                    <div className="col-10">
                                        <h4>{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 pt-5">
                    <img src={macImg} className="img-fluid" />
                </div>
            </div>
        </Section>
    );
}