import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBTypography, MDBCardText, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router';

const Profile = () => {
  const nav=useNavigate();
  const handclick =()=>{
    nav('/pchase')
  }
  return (
    <div className="vh-100" style={{  }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-1000 align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Popz Tune</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @Surya🎵 <a href="#!"></a>
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg" onClick={handclick}>
                  Buy Now
                </MDBBtn>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">₹999</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Wallets Balance</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">01</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">₹0</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Profile;