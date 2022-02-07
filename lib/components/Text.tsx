import styles from '../../styles/text.module.css'

export const Text = ({ text }: any) => {
    if (!text) {
        return null;
    }
    return text.map((value: any) => {
        const {
            annotations: { bold, code, color, italic, strikethrough, underline },
            text,
        } = value;
        return (
            // eslint-disable-next-line react/jsx-key
            <span
                className={[
                    bold ? styles.bold : "",
                    code ? styles.code : "",
                    italic ? styles.italic : "",
                    strikethrough ? styles.strikethrough : "",
                    underline ? styles.underline : "",
                ].join(" ")}
                style={color !== "default" ? { color } : {}}
            >
                {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
            </span>
        );
    });
};