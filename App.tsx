import React from 'react';

import { AppTheme } from './src/theme/AppTheme';
import { RootNavigation } from './src/navigation/RootNavigation';
import { DataStoreProvider } from './src/datastore/DataStoreProvider';

const App = () => {
  return (
    <AppTheme>
      <DataStoreProvider>
        <RootNavigation />
      </DataStoreProvider>
    </AppTheme>
  );
};

export default App;
