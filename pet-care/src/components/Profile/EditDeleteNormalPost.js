import React, { useEffect, useState } from "react";
import "../../componentStyle/ProfilePage/EditDeleteNormalPost.css";
import EditpostDescription from "./EditpostDescription";
import DeleteNormalPost from "./DeleteNormalPost";
import EditNormalPostType from "./EditNormalPostType";
import uploadIcon from "../../Image/uploadIcon.png";
import PostImage from "./PostImage";
import { getUserId } from "../../hooks/auth/getUserId";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import api from "../../services/api";
import ImageUploder from "../../shaerdComponents/ImageUploder";
import SaveChangeButton from "./SaveChangeButton";
import PostNevigation from "./PostNevigation";
import EditSwitch from "./EditSwitch";
import NoPostFound from "./NoPostFound";

const enabelDrag = (
  <div className="empty-upload-ref">
    <div className="upload-word">Upload</div>
    <div
      className="drag-drop-section"
      style={{ width: `27.5rem`, height: `9rem` }}
    >
      <div
        className="upload-icon"
        style={{ backgroundImage: `url("${uploadIcon}")` }}
      ></div>
      <div className="drag-massage">
        Enable Edit then Drag & Drop images or
        <span className="browse-word">Browse</span>
      </div>
      <div className="support-type">Supported formates: JPEG, PNG, GIF.</div>
    </div>
  </div>
);

export default function EditDeleteNormalPost() {
  const [isEditable, setIsEditable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [reloadPost, setReloadPost] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [imagesBase64, setImagesBase64] = useState([]);
  const [postType, setPostType] = useState("");
  const [postDecription, setPostDecription] = useState("");
  const [postImage, setPostImage] = useState([]);
  const [postId, setPostId] = useState("");

  useEffect(() => {
    getUserPost();
  }, []);

  useEffect(() => {
    getUserPost();
  }, [reloadPost]);

  useEffect(() => {
    setIsEditable(true);
    setImagesBase64([]);
    setDefaultPost(
      userPosts[currentPostIndex]?.postType,
      userPosts[currentPostIndex]?.description,
      userPosts[currentPostIndex]?.Images,
      userPosts[currentPostIndex]?._id
    );
  }, [currentPostIndex]);

  const getUserPost = async () => {
    setIsLoading(true);
    const response = await api.get(`/getNormalPostUser/:${getUserId()}`);
    setUserPosts(response.data);
    setIsLoading(false);
    setDefaultPost(
      response.data[currentPostIndex]?.postType,
      response.data[currentPostIndex]?.description,
      response.data[currentPostIndex]?.Images,
      response.data[currentPostIndex]?._id
    );
  };
  const setDefaultPost = (type, description, image, id) => {
    setPostType(type);
    setPostDecription(description);
    setPostImage(image);
    setPostId(id);
  };

  const handleEditeStatus = () => {
    setIsEditable(!isEditable);
  };
  const handlePreviseIndex = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex === 0 ? userPosts.length - 1 : prevIndex - 1
    );
  };

  const handleNextIndex = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex === userPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const reciveImagePath = (images) => {};

  const reciveImagePathBase64 = (images) => {
    setImagesBase64(images);
  };
  const handelReloadPost = () => {
    setReloadPost(!reloadPost);
  };

  const reciveNewType = (type) => {
    setPostType(type);
  };
  const reciveNewDescription = (decription) => {
    setPostDecription(decription);
  };
  const reciveNewImage = (images) => {
    setPostImage(images);
  };

  return isLoading ? (
    <div className="edit-center-loading">
      <LoadingBar />
    </div>
  ) : userPosts.length === 0 ? (
    <NoPostFound massage="You dont have any post" />
  ) : (
    <div className="edit-post-holder">
      <PostNevigation
        getPrevisePost={handlePreviseIndex}
        getNextPost={handleNextIndex}
      />
      <div className="edit-post-left-rigth">
        <div className="edit-post-left">
          <div className="edit-delete-switch">
            <EditSwitch active={!isEditable} sendEdite={handleEditeStatus} />
            <DeleteNormalPost
              postId={userPosts[currentPostIndex]?._id}
              reloadPost={handelReloadPost}
            />
          </div>
          <EditNormalPostType
            active={isEditable}
            postType={userPosts[currentPostIndex]?.postType}
            sendNewType={reciveNewType}
          />

          <EditpostDescription
            active={isEditable}
            description={userPosts[currentPostIndex]?.description}
            sendNewDescription={reciveNewDescription}
          />
        </div>
        <div className="edit-post-rigth">
          <PostImage
            minHeight="11.5rem"
            active={isEditable}
            images={userPosts[currentPostIndex]?.Images}
            imagesBase64={imagesBase64}
            nextPost={currentPostIndex}
            sendNewImages={reciveNewImage}
          />
          {isEditable ? (
            enabelDrag
          ) : (
            <ImageUploder
              sendImagesPath={reciveImagePath}
              height={"9rem"}
              width={"27.5rem"}
              sendImages={reciveImagePathBase64}
            />
          )}
        </div>
      </div>
      <SaveChangeButton
        active={isEditable}
        postImage={postImage}
        postType={postType}
        postDescription={postDecription}
        postId={postId}
      />
    </div>
  );
}
