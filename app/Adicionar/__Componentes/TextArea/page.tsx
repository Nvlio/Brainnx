

export default function TextAreaForm({ label, placeholder }: { label: string, placeholder: string }) {
    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">{label}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={placeholder}></textarea>
        </div>
    )
}