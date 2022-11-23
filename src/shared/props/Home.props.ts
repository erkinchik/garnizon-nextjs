import {IHome, ILinks, IPlans, IServices} from "../types/contentful";

export interface HomeProps extends Record<string, unknown> {
    home: IHome[];
    services: IServices[];
    plans: IPlans[];
    links: ILinks[];
}