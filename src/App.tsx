// React
import React from 'react';

// Pages
import OrganizationScreen from './pages/organization/OrganizationScreen';

// Styles
import 'antd/dist/antd.css';
import GlobalStyle from './theme/globalStyle';

// Components
import Layout from './components/layout/layout/Layout';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Layout>
      <GlobalStyle />
      <OrganizationScreen />
    </Layout>
  );
}

export default App;
