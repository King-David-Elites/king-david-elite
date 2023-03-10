import styled from "styled-components";
import theme from "../../application/utils/Theme.jsx";
import { Field, ErrorMessage } from "formik";
import { TextError } from "./MainInput"
import InputLayout from "./InputLayout";
import { useRef, useState } from "react";
import { DragDropText, FileMetaData, FilePreviewContainer, FileUploadContainer, FormField, ImagePreview, PreviewContainer, PreviewList, RemoveFileIcon, UploadFileBtn } from "../Categories/Cars/Cars.Style";

export const Image = styled.image`
        min-width: 300px;
        height: 40px;
        outline: none;
        font-size: 15px;
        font-weight: 500;
        padding: 0 0.5em;
        background-color: white;
        letter-spacing: 0.05em;
        margin-top: 1em;
        
        @media (min-width: ${theme.breakPoint['tablet']}) {
            margin:${props => props.margin ? props.margin : "0em"};
            width:${props => props.width ? props.width : "300px"}; 
            height: 40px;
            font-size:17px;
        }
    
`

export const Option = styled.option`
  padding: 1rem;
  color: #00000096;
`

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const KILO_BYTES_PER_BYTE = 1000;

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const DropdownInput = (props) => {
    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});

    const { label, name, type, options, updateFilesCb, maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES, ...rest } = props;

    const convertNestedObjectToArray = (nestedObj) =>
        Object.keys(nestedObj).map((key) => nestedObj[key]);

    const addNewFiles = (newFiles) => {
        for (let file of newFiles) {
            if (file.size < maxFileSizeInBytes) {
                if (!rest.multiple) {
                    return { file };
                }
                files[file.name] = file;
            }
        }
        return { ...files };
    };


    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };

    const callUpdateFilesCb = (files) => {
        const filesAsArray = convertNestedObjectToArray(files);
        updateFilesCb(filesAsArray);
    };


    const handleNewFileUpload = (e) => {
        const { files: newFiles } = e.target;
        if (newFiles.length) {
            let updatedFiles = addNewFiles(newFiles);
            setFiles(updatedFiles);
            callUpdateFilesCb(updatedFiles);
        }
    };

    const removeFile = (fileName) => {
        delete files[fileName];
        setFiles({ ...files });
        callUpdateFilesCb({ ...files });
    };

    return (
        <>
            <Field name={name} >
                {({ field }) =>
                    <>
                        <InputLayout label={label} name={name} ></InputLayout>
                        <FileUploadContainer>
                            <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
                                <i className="fas fa-file-upload" />
                                <span> Upload {rest.multiple ? "files" : "a file"}</span>
                            </UploadFileBtn>
                            <DragDropText>PNG, JPG, GIF up to 5mb</DragDropText>
                            <FormField
                                type="file"
                                ref={fileInputField}
                                onChange={handleNewFileUpload}
                                title=""
                                value=""
                                {...rest}
                            />
                        </FileUploadContainer>
                        <FilePreviewContainer>
                            {/* <p className="textOpaque">mark and upload more than one high-quality images. listings with low quality images may be rejected</p> */}
                            {/* <span>To Upload</span> */}
                            <PreviewList>
                                {Object.keys(files).map((fileName, index) => {
                                    let file = files[fileName];
                                    let isImageFile = file.type.split("/")[0] === "image";
                                    return (
                                        <PreviewContainer key={fileName}>
                                            <div>
                                                {isImageFile && (
                                                    <ImagePreview
                                                        src={URL.createObjectURL(file)}
                                                        alt={`file preview ${index}`}
                                                    />
                                                )}
                                                <FileMetaData isImageFile={isImageFile}>
                                                    <span>{file.name}</span>
                                                    <aside>
                                                        <span>{convertBytesToKB(file.size)} kb</span>
                                                        <RemoveFileIcon
                                                            className="fas fa-trash-alt"
                                                            onClick={() => removeFile(fileName)}
                                                        />
                                                    </aside>
                                                </FileMetaData>
                                            </div>
                                        </PreviewContainer>
                                    );
                                })}
                            </PreviewList>

                        </FilePreviewContainer>

                    </>}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </>
    );
}

export default DropdownInput;