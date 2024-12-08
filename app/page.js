import BestSellers from "./_components/BestSellers";
import DiscoverMore from "./_components/DiscoverMore";
import GetThemNow from "./_components/GetThemNow";
import Layout from "./_components/Layout";
import ShopProducts from "./_components/ShopProducts";

export default function Home() {
  return (
    <Layout criteria={true}>
      <BestSellers />
      <GetThemNow />
      <ShopProducts />
      <DiscoverMore />
    </Layout>
  );
}
