import React from 'react';

export const AppContext = React.createContext({
    progress: 1,
    setProgress : () => {},
    selected: [],
    setSelected: () => {},
    selectedCard: null,
    setSelectedCard: () => {},
});