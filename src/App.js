import Balance from "./Components/Balance/Balance";
import Navbar from "./Components/Navbar/Navbar";
import History from "./Components/History/History";
import Transaction from "./Components/Transaction/Transaction";
import { Layout } from "./globalstyles";
function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <Balance />
        <History />
        <Transaction />
        <p style={{ textAlign: "center" }}>&copy; Coded By Digvijay</p>
      </Layout>
    </main>
  );
}

export default App;
