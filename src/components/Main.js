import React from "react";
import profile from "../assets/Zaraprofile.jpg";
import Container from "react-bootstrap/Container";

const Main = () => {
  return (
    <Container>
      <div className="container mt-5 bg-light bg-gradient">
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center mb-5">
            <h2>Немного обо мне</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 mb-md-0 mb-3">
            <img
              src={profile}
              alt="Zara"
              className="img-fluid thumbnail"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-7">
            <h3>Откройте Амстердам вместе с Зарой</h3>
            <p>
              Приветствую вас! Меня зовут Зара, и я живу в Амстердаме уже 5 лет.
              В этом прекрасном городе я стала профессиональным гидом и
              организую индивидуальные и групповые экскурсии по Нидерландам для
              русскоязычных туристов. Если вы хотите погрузиться в местную
              культуру и историю, то я готова с удовольствием провести вас через
              это невероятное путешествие, предоставив интересную экскурсионную
              программу и языковую поддержку.
            </p>
            <p>
              Во время экскурсии я расскажу вам множество удивительных фактов и
              легенд о городе, покажу знаменитые достопримечательности, и вы
              сможете окунуться в атмосферу этого удивительного места. Я
              сосредоточусь на ваших интересах и предпочтениях, чтобы каждый из
              вас получил незабываемые впечатления от поездки.
            </p>
            <p>
              Не стесняйтесь задавать вопросы и делиться своими пожеланиями -
              ваше удовольствие от путешествия для меня превыше всего!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
