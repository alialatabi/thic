import Footer from "./Footer";
import Nav from "./Nav";
export default function WithLayout(Componant) {
  return (
    <>
      <Nav />
      <Componant />
      <Footer />
    </>
  );
}
