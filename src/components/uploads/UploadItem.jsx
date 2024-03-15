import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';


const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file, type) => {
 
    if(type === "video"){
        return true
    }

  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
//   return isJpgOrPng && isLt2M;
return isJpgOrPng && isLt2M
};

const UploadItem = (props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      console.log(info.file.response)
      props.onChange(info.file.response.file)
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <>
      <Upload
        name="image"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://instagram-backend-y55a.onrender.com/upload"
        beforeUpload={(file)=>beforeUpload(file, props.type)}
        onChange={handleChange}
      >
       {props.type === "video" ?
       <>
        {imageUrl ? <p>Uploaded</p> : uploadButton}
        </>
        :
        <>
        {imageUrl ?(
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
        
        </>
    }

        
      </Upload>
      
    </>
  );
};
export default UploadItem;