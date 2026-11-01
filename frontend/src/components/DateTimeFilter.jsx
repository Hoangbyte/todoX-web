import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

import { options } from "@/lib/data";

const DateTimeFilter = ({ dateQuery, setDateQuery }) => {
  const currentOption = options.find((opt) => opt.value === dateQuery);

  return (
    <Combobox items={options}>
      <ComboboxInput 
        value={currentOption ? currentOption.label : "Chọn thời gian..."} 
        placeholder="Chọn thời gian..." 
        readOnly
      />
      <ComboboxContent>
        <ComboboxEmpty>Không tìm thấy.</ComboboxEmpty>
        <ComboboxList>
          {options.map((item) => (
            <ComboboxItem
              key={item.value}
              value={item.value}
              onClick={() => setDateQuery(item.value)}
            >
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default DateTimeFilter;