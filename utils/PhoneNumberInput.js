import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Input,
  Select,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import Flag from "react-world-flags";
import { AsYouType } from "libphonenumber-js";
import { getCountryTelCode } from "./countries";
import { HiChevronDown, HiPhone } from 'react-icons/hi'


export default function PhoneNumberInput({
  size,
  value,
  country,
  options,
  onChange,
  placeholder,
  ...rest
}) {
  let [number, setNumber] = useState(value || "+880");
  let [selectedCountry, setSelectedCountry] = useState(country ? country : "BGD");
  let [countryCode, setCountryCode] = useState(
    getCountryTelCode(country) || ""
  );


  // console.log('selectedCountry', selectedCountry);
  useEffect(() => {
    setSelectedCountry('BGD');
    setCountryCode(getCountryTelCode(country));
  }, [country]);

  const onCountryChange = e => {
    let value = e.target.value;
    let code = getCountryTelCode(value);
    let parsedNumber = new AsYouType().input(`${code}${number}`);

    setCountryCode(code);
    setSelectedCountry(value);
    onChange(parsedNumber);
    setNumber(parsedNumber)
  };

  const onPhoneNumberChange = e => {
    let value = e.target.value;
	  let parsedNumber = new AsYouType().input(`${countryCode}${value}`);
	  
	  setNumber(value);
		//   onChange(parsedNumber)
      onChange(value)
  };

  return (
		<InputGroup size={size} {...rest}>
			<InputLeftElement width="4rem">
				<Select
					top="0"
					left="0"
					zIndex={1}
					bottom={0}
					opacity={0}
					height="100%"
					position="absolute"
					value={selectedCountry}
					onChange={onCountryChange}
					icon={false}
				>
					<option value="" />
					{options.map((option) => (
						<option key={option.value} value={option.value}>{option.label}</option>
					))}
				</Select>
				<Flex pl={2} width="100%" alignItems="center">
					{selectedCountry ? (
						<Box mr="4px" width="50%" flex={1}>
							<Flag height="1rem" code={selectedCountry || ''} />
						</Box>
					) : (
						<HiPhone />
					)}
					<HiChevronDown />
				</Flex>
			</InputLeftElement>
			<Input
				pl="4rem"
				type="tel"
				value={number}
				// pattern="[0-9]"
				placeholder={placeholder}
				onChange={(e)=>onPhoneNumberChange(e)}
				size={`md`}
				_placeholder={{
					fontWeight: 200,
					fontSize: `16px`,
					color: `gray.400`,
				}}
			/>
		</InputGroup>
	)
}

PhoneNumberInput.defaultProps = {
  options: [],
  size: "md"
};
