const { registerBlockType} = wp.blocks;
const { RichText,  
        InspectorControls,
        MediaUpload
    } = wp.editor;

registerBlockType('personofnote/image-switcher', { 
        title: 'Image Switcher',
        icon: 'format-image', 
        category: 'common',

        attributes: {
            backgroundImage: {
                type: 'string',
                defult: null,
            },
            backgroundImage1: {
                type: 'string',
                defult: null,
            }
        },
        edit(props) {
            const { setAttributes, 
                attributes, 
                className,
                focus
            } = props;
            const backgroundImage = attributes.backgroundImage;
            const backgroundImage1 = attributes.backgroundImage1;
            return ([
                <InspectorControls>
                <div>
                <strong>Select a background image:</strong>
            <MediaUpload
                onSelect={(imageObject) => setAttributes({
                    backgroundImage: imageObject.sizes.full.url,
                })}
                type="image"
                value={backgroundImage}
                render={({ open }) => (
                    <button onClick={open}>
                        Upload Image
                    </button>
            )}
            />
            </div>
            <div>
                <strong>Select a second background image:</strong>
            <MediaUpload
                onSelect={(imageObject) => setAttributes({
                    backgroundImage1: imageObject.sizes.full.url
                })}
                type="image"
                value={backgroundImage1}
                render={({ open }) => (
                    <button onClick={open}>
                        Upload Image
                    </button>
            )}
            />
            </div>
            </InspectorControls>,
            //HTML div

                <div className={className}>
                    <div className="image-visible"
                    style={{ 
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    </div>
                    <div className="image-hover"
                    style={{
                        backgroundImage: `url(${backgroundImage1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    </div>
                </div>

            ]);
        },

        save(props) {
            const { attributes, className} = props;
            const { backgroundImage, backgroundImage1 } = props.attributes;
            return (

                    <div className={className}>
                        <div className="image-visible"
                        style={{ 
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        </div>
                        <div className="image-hover"
                        style={{
                            backgroundImage: `url(${backgroundImage1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        </div>
             </div>

            );
                }
    }
);


