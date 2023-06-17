import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { notificationProvider, RefineThemes } from "@refinedev/mantine";

import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
  Tuple,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import routerBindings, {
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { DataProvider } from "@refinedev/strapi-v4";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider, axiosInstance } from "./authProvider";
import { API_URL } from "./constants";
import { Home } from "./pages/home";
import { ArticleList } from "./pages/articles/list";
import { ArticleShow } from "./pages/articles/show";
import { Layout } from "./components/layout";
import { AboutPage } from "./pages/about";
import { FaqPage } from "./pages/faq";
import { ContactPage } from "./pages/contact";
import { TeamPage } from "./pages/team";
import { HistoryPage } from "./pages/history";
import { ArkhePage } from "./pages/arkhe";
import ScrollToTop from "./components/util/ScrollToTop";

const colorsOverride: Record<string, Tuple<string, 10>> = {
  brand: [
    "#EEE7E8",
    "#CAAEB0",
    "#B4797D",
    "#A64B52",
    "#912F37",
    "#821820",
    "#77040D",
    "#4E0E13",
    "#341114",
    "#241012",
  ],
};

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  history.scrollRestoration = "manual";
  const { t, i18n } = useTranslation();

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{
              ...RefineThemes.Red,
              colors: {
                ...RefineThemes.Red.colors,
                ...colorsOverride,
              },
              colorScheme: colorScheme,
              primaryColor: "brand",
              primaryShade: 6,
            }}
            withNormalizeCSS
            withGlobalStyles
          >
            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
            <NotificationsProvider position="top-right">
              <Refine
                authProvider={authProvider}
                dataProvider={DataProvider(API_URL, axiosInstance)}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                i18nProvider={i18nProvider}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                }}
                resources={[
                  {
                    name: "articles",
                    list: "/articles",
                    show: "/articles/:slug",
                  },
                ]}
              >
                <ScrollToTop>
                  <Routes>
                    <Route
                      element={
                        <Layout>
                          <Outlet />
                        </Layout>
                      }
                    >
                      <Route index element={<Home />} />
                      <Route path="articles">
                        <Route index element={<ArticleList />} />
                        <Route path=":slug" element={<ArticleShow />} />
                      </Route>
                      <Route path="hakkimizda">
                        <Route index element={<AboutPage />} />
                      </Route>
                      <Route path="ekip">
                        <Route index element={<TeamPage />} />
                      </Route>
                      <Route path="iletisim">
                        <Route index element={<ContactPage />} />
                      </Route>
                      <Route path="arkhe">
                        <Route index element={<ArkhePage />} />
                      </Route>
                      <Route path="tarihce">
                        <Route index element={<HistoryPage />} />
                      </Route>
                      <Route path="sss">
                        <Route index element={<FaqPage />} />
                      </Route>
                    </Route>
                  </Routes>
                </ScrollToTop>

                <RefineKbar />
                <UnsavedChangesNotifier />
              </Refine>
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
