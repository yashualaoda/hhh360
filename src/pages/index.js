import Loadable from 'react-loadable';

const Loading = () => null;

const Recommend = Loadable ({
    loader: () => import('./Recommend/Recommend'),
    loading: Loading
});

const Rank = Loadable ({
    loader: () => import('./Rank/Rank'),
    loading: Loading
});

const Love = Loadable ({
    loader: () => import('./Love/Love'),
    loading: Loading
});

const NewBooks = Loadable ({
    loader: () => import('./NewBooks/NewBooks'),
    loading: Loading
});

const NotFound = Loadable ({
    loader: () => import('./404/404'),
    loading: Loading
});

export { Recommend, Rank, NotFound, Love, NewBooks }
