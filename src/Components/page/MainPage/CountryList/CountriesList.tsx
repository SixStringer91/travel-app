import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Card, Col, Row, Image
} from 'antd';
import Preloader from '../../../shared/preloader.component';

const { Meta } = Card;

const CountriesList = ({
  loading,
  getCountries,
  countriesList,
  text,
  setExcretion,
  setSearchIsDisabled
}: any) => {
  React.useEffect(() => {
    setSearchIsDisabled();
    if (!countriesList.length) {
      getCountries();
    }
  }, []);

  const list = countriesList.map((el: any) => (
    <Col
      span={6}
      xs={{ span: 16 }}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      lg={{ span: 6 }}
      style={{
        opacity: 1,
        transition: '.55s opacity',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center'
      }}
      key={el.name}
    >
      <NavLink
        to={`/${el.nameEN}`}
        id={el.nameEN}
        onClick={() => {
          setSearchIsDisabled(true);
        }}
      >
        <Card
          bordered
          hoverable
          style={{ width: '200px' }}
          cover={(
            <Image
              style={{ objectFit: 'cover' }}
              width={200}
              height={200}
              preview={false}
              src={el.photo}
              placeholder={(
                <div
                  style={{
                    height: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Preloader />
                </div>
              )}
            />
          )}
        >
          <Meta
            style={{ textAlign: 'center' }}
            title={setExcretion(el.name, text)}
            description={setExcretion(el.capital, text)}
          />
        </Card>
      </NavLink>
    </Col>
  ));

  return (
    <>
      {!loading ? (
        <Row
          gutter={[8, 48]}
          justify="center"
          align="middle"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1366px'
          }}
        >
          {list}
        </Row>
      ) : (
        <div
          style={{
            width: 'max-content',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Preloader />
        </div>
      )}
    </>
  );
};

export default CountriesList;
