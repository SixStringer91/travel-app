import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import ModalForm from './ModalForm/ModalForm';
import { Thunks } from '../../../redux/action-creators/thunks';

const Profile = () => {
  const isAuth = useSelector((state: any) => state.userReducer.isAuth);
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const openModalForm = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const onCancelHandler = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  const selectAuthType = useCallback(() => {
    setIsSignIn((prev) => !prev);
  }, [setIsSignIn]);

  const onSubmitLogin = useCallback(
    (values) => {
      dispatch(Thunks.login(values.username, values.password));
      setIsVisible(false);
    },
    [dispatch, setIsVisible]
  );

  const onSubmitRegistration = useCallback(
    (values) => {
      Thunks.registration(values.username, values.password);

      setIsSignIn(true);
    },
    [dispatch, setIsSignIn]
  );

  const onLogout = useCallback(() => {
    localStorage.removeItem('token');

    // dispatch(AC.logout());
  }, [dispatch]);

  return (
    <div>
      {isAuth ? (
        <Button type="primary" onClick={onLogout}>
          Sign Out
        </Button>
      ) : (
        <Button type="primary" onClick={openModalForm}>
          Sign In
        </Button>
      )}

      <ModalForm
        visible={isVisible}
        isSignIn={isSignIn}
        onCancel={onCancelHandler}
        selectAuthType={selectAuthType}
        onSubmitLogin={onSubmitLogin}
        onSubmitRegistration={onSubmitRegistration}
      />
    </div>
  );
};

export default Profile;
