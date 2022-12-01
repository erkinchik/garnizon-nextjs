import { StaticImageData } from "next/image";
import operator from "../assets/media/operator.png";

export interface IService {
  title: string;
  id: string;
  text: string;
  image: StaticImageData;
}
export enum servicesPaths {
  physicalSecurity = "physicalSecurity",
  remoteSecurity = "remoteSecurity",
  personalSecurity = "personalSecurity",
  cargoSupport = "cargoSupport",
  realEstateSecurity = "realEstateSecurity",
}

export const services = [
  {
    title: "Физическая охрана",
    id: servicesPaths.physicalSecurity,
    image: operator,
    text: "У нас работают только опытные сотрудники с превосходной физической подготовкой, находящие решения в любых внештатных случаях. Мы в первую очередь ориентируемся на Ваши интересы!",
  },
  {
    title: "Пультовая охрана",
    id: servicesPaths.remoteSecurity,
    image: operator,
    text:
      "Пультовая охрана — это современный комплекс технических средств безопасности с выводом на централизованный пульт мониторинга и дальнейшим организованным выездом групп быстрого реагирования по сигналам тревоги с охраняемых объектов.\n" +
      "«Гарнизон» оказывает услуги по организации пультовой охраны объектов, установке и обслуживанию охранной, охранно-пожарной и тревожной сигнализации любых типов.\n",
  },
  {
    title: "Личная охрана",
    id: servicesPaths.personalSecurity,
    image: operator,
    text:
      "личная охрана на час\n" +
      "охрана на время проведения определенных торжественных мероприятий\n" +
      "личный охранник для встречи клиента в аэропорту, на вокзале или в другом людном месте\n" +
      "постоянно личная охрана и сопровождение.\n",
  },
  {
    title: "Охрана и сопровождение грузов",
    id: servicesPaths.cargoSupport,
    image: operator,
    text: "Мы специализируемся на вооруженной и невооруженной охране грузов при их перевозке по территории КР. Наши сотрудники обеспечат безопасность и доставляемой продукции, и сотрудников компании-заказчика, и самого транспортного средства.",
  },
  {
    title: "Охрана недвижимости",
    id: servicesPaths.realEstateSecurity,
    image: operator,
    text: "Используемые методы и технические средства подбираются индивидуально для каждого объекта с учетом его специфики (месторасположения, назначения, площади, удаленности, транспортной доступности и прочих факторов).",
  },
];
