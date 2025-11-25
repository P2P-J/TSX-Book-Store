import Title from "../components/common/Title";
import Button from "../components/common/Button";

function Home() {
  return (
    <>
      <Title size="medium" color="background">
        제목 테스트
      </Title>
      <Button size="large" scheme="primary">
        버튼 테스트
      </Button>
      <div>book body</div>
    </>
  );
}
export default Home;
