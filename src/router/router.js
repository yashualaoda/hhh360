import { Recommend, Rank, NotFound, Love, NewBooks } from '../pages/index';

const routes = [{
    path: '/Recommend',
    component: Recommend
},{
    path: '/Rank',
    component: Rank
},{
    path: '/NewBooks',
    component: NewBooks
},{
    path: '/404',
    components: NotFound
},{
    path: '/Love',
    component: Love
}];

export default routes