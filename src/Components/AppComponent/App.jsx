import Form from '../FormComponent/Form';
import ContainerCard from '../CardsComponent/ContainCardComponent';

import './App.css';

function App()
{
  return (
    <div className="container-fluid">
        <div className="container">
            <div className="row justify-content-center add-contact-form">
                <div className="col-sm-12 col-md-6 col-lg-4 center">
                    <Form></Form>
                </div>
            </div>
            <div className="row card-container">
                <ContainerCard></ContainerCard>
            </div>
        </div>
    </div>
  );
}

export default App;
