
import React from 'react';
class Driver extends React.Component {

    render(){
    return (
          <div className="sc-1rkezdt-412 cwMDkh1">
                                    
                                  <div className="login-form">
          
          <div className="form">
            <div className="center" style={{textAlign: 'center'}}>
              <h2>Thông tin trên giấy phép lái xe</h2>
              {/* <p>Chú ý các nội dung có dấu * bạn cần phải nhập</p> */}
            </div>
            <div id="registerForm" className="hh-form">
              <form method="post" action="/Account/Register">
                <input type="hidden" name="ReturnUrl" />
                <input name="__RequestVerificationToken" type="hidden" defaultValue="Cy5yHDKjKiX5B5GTejT-6te2imKrlV0d_Zmokn6s3y9RPsV_Wbb9HeZLIzmjwwu9-i60tUk5WO-afmJ4UFeaZeeGDmI1" />
                <div className="form-controls">
                  <label>Số:</label>
                  <div className="controls">
                    <input type="text" name="UserName" id="UserName" placeholder="Số *" data-required={1} />
                  </div>
                </div>
                <div className="form-controls">
                  <label>Họ tên:</label>
                  <div className="controls">
                    <input type="text" name="UserName" id="UserName" placeholder="Họ và tên *" data-required={1} />
                  </div>
                </div>
                <div className="form-controls">
                  <label>Ngày sinh:</label>
                  <div className="controls">
                    <input type="text" name="Title" id="Title" placeholder="Ngày, tháng, năm sinh*" data-required={1} />
                  </div>
                </div>
                <div className="form-controls">
                  <label>Quốc tịch:</label>
                  <div className="controls">
                    <input type="text" name="PasswordHash" id="PasswordHash" placeholder="Quốc tịch *" data-required={1} />
                  </div>
                </div>
                <div className="form-controls">
                  <label>Nơi cư trú:</label>
                  <div className="controls">
                    <input type="text" name="UserName" id="UserName" placeholder="Nơi cư trú: *" data-required={1} />
                  </div>
                </div>

                <div className="form-controls">
                  <label>Hạng:</label>
                  <div className="controls">
                    <input type="text" name="UserName" id="UserName" placeholder="Hạng: *" data-required={1} />
                  </div>
                </div>
                
                <div className="form-controls">
                  <div className="controls submit-controls">
                    <button type="submit">TẢI VỀ THÔNG TIN</button>
                  </div>
                </div>
              </form>
            </div>
            <link href="/Content/web/js/plugins/jquery-datepicker/datepicker.min.css" rel="stylesheet" />
          </div>
        </div>
                                    
                                  </div>
      );
    }
  }
  
  export default Driver;
  