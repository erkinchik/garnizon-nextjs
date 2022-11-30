import React from 'react';
import Camera from '../../../../../assets/icons/camera.svg'
import Image1 from '../../../../../assets/icons/imagetabl.svg'
import Image2 from '../../../../../assets/icons/imageoxrana2.svg'
import Image3 from '../../../../../assets/icons/imageoxranr3.svg'
import Image4 from '../../../../../assets/icons/imageoxrana4.svg'
import styles from '../AboutService.module.scss'
export const ComponentsAboutServiceOne = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <div style={{display:"flex",gap:25, alignItems:"center", flexWrap:"wrap" }}>
            <Image2/>
            <p
                style={{maxWidth:350}}>У нас работают только опытные сотрудники с превосходной физической подготовкой,
                находящие решения в любых внештатных случаях. Мы в первую очередь ориентируемся на Ваши интересы!
            </p>
            </div>
        </div>
    );
};

export const ComponentsAboutServiceTue = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <div style={{display:"flex",gap:25, alignItems:"center", flexWrap:"wrap" }}>
                <Image3/>
                <p style={{maxWidth:350}}> <span style={{fontWeight:500}}>Пультовая охрана</span> — это современный комплекс технических средств безопасности с выводом на централизованный пульт мониторинга
                и дальнейшим организованным выездом групп быстрого реагирования по сигналам тревоги с охраняемых объектов.
                «Гарнизон» оказывает услуги по организации пультовой охраны объектов,
                установке и обслуживанию охранной, охранно-пожарной и тревожной сигнализации любых типов.</p>
            </div>
        </div>
    );
};

export const ComponentsAboutServiceTree= () => {
    return (
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <div style={{display:"flex",gap:25, alignItems:"center", flexWrap:"wrap" }}>
                <Image1/>
                <p
                style={{maxWidth: 350}}>  личная охрана на час
            охрана на время проведения определенных торжественных мероприятий
            •личный охранник для встречи клиента в аэропорту, на вокзале или в другом людном месте
            •постоянно личная охрана и сопровождение
            </p>
            </div>
        </div>
    );
};

export const ComponentsAboutServiceFore = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div style={{display:"flex",gap:25, alignItems:"center", flexWrap:"wrap" }}>
            <Image4/>
            <p style={{maxWidth: 350}}>Мы специализируемся на вооруженной и невооруженной охране грузов при их перевозке по территории КР.
                Наши сотрудники обеспечат безопасность и доставляемой продукции, и сотрудников компании-заказчика, и самого транспортного средства.</p>
            </div>
        </div>
    );
};

    export const ComponentsAboutServiceFive = () => {
        return (
            <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                <div style={{display:"flex",gap:25, alignItems:"center", flexWrap:"wrap" }}>
                <div className={styles.photo}></div>
                <p
                    style={{maxWidth:350}}>Используемые методы и технические средства подбираются индивидуально для каждого объекта с учетом его специфики
                    (месторасположения, назначения, площади, удаленности, транспортной доступности и прочих факторов).
                </p>
                </div>
            </div>
        );
};
