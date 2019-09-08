import Loadable from 'react-loadable';

const Loading = () => null;

const Recommend = Loadable ({
    loader: () => import('./Recommend'),
    loading: Loading
});

const Rank = Loadable ({
    loader: () => import('./Rank'),
    loading: Loading
});

const Love = Loadable ({
    loader: () => import('./Love'),
    loading: Loading
});

const NewBooks = Loadable ({
    loader: () => import('./NewBooks'),
    loading: Loading
});

const NotFound = Loadable ({
    loader: () => import('./404'),
    loading: Loading
});

export { Recommend, Rank, NotFound, Love, NewBooks }
