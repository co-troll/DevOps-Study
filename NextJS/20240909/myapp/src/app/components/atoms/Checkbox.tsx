const Checkbox = ({ text }: { text: string }) => {
  return (
    <div className="flex">
      <input type="checkbox" id="check" className="hidden peer" />
      <label htmlFor="check" className="flex w-max border rounded-md fill-gray-200 peer-checked:fill-black peer-checked:border-black">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
          <path d="M9 19.4L3.3 13.7 4.7 12.3 9 16.6 20.3 5.3 21.7 6.7z"></path>
        </svg>
      </label>
      <span>{text}</span>
    </div>
  );
}

export default Checkbox;
