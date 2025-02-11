import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface SelectProps {
  options?: { label: string; value: string }[];
  placeholder: string;
}

const FilterSelect = ({ options, placeholder }: SelectProps) => {
  return (
    <Select
      onValueChange={(value) => {
        const selectedOption = options?.find((opt: any) => opt.value === value);
        console.log(selectedOption);
      }}
    >
      <SelectTrigger className="h-[48px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((option: any, index: any) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterSelect;
