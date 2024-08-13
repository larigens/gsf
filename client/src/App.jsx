import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Header } from './components/Header/Header';
import { NavBar } from './components/Header/NavBar/NavBar';
import { Footer } from './components/Footer';
import { ModeSwitch } from './components/ModeSwitch';
import { ThemeProvider } from './components/ThemeContext';
import { CareerForm } from './components/Forms/CareerForm';
import { FullScreenForm } from './components/Forms/FullScreenForm';

import Home from './pages/Home';
import ApplyNow from './pages/ApplyNow';
import AboutUs from './pages/AboutUs';
import Referral from './pages/Referral';
import Services from './pages/Services/Services';
import Careers from './pages/Careers';
import Transportation from './pages/Services/Transportation';
import Staffing from './pages/Services/Staffing';
import Contact from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Resources } from './pages/Resources/Resources';
import { WorkingGSF } from './pages/Resources/WorkingGSF';
import { Credit } from './pages/Resources/Credit';
import { Portal } from './pages/Resources/Portal';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider>
          <Header>
            <NavBar />
          </Header>
          <ModeSwitch />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/application" element={<CareerForm />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/transportation" element={<Transportation />} />
              <Route path="/services/staffing" element={<Staffing />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/working-gsf" element={<WorkingGSF />} />
              <Route path="/resources/credit-services" element={<Credit />} />
              <Route path="/resources/client-portal" element={<Portal />} />
              <Route path="/apply-now" element={<ApplyNow />} />
              <Route path="/application" element={<FullScreenForm />} />
              <Route path="/referrals/:id" element={<Referral />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}