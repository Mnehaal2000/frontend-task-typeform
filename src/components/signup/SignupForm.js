import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import { Checkbox, FormControl, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/joy';
import { Info, Visibility, VisibilityOff } from '@mui/icons-material';

export default function InputFormProps() {
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  // email validation when entered and constant listening plus checking after the user has moved on from the input
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmailError('');
    if (email.trim() === '') {
      setEmailError('This field cannot be left blank');//message to be showed to the user
    } else if (!validateEmail(email)) {
      setEmailError('Enter a valid email address');//message to be showed to the user
    }
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    if (email.trim() === '') {
      setEmailError('This field cannot be left blank');//message to be showed to the user
    } else if (!validateEmail(email)) {
      setEmailError('Enter a valid email address');//message to be showed to the user
    }
  };

  // password validation when entered and constant listening plus checking after the user has moved on from the input
  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPasswordError('');
    if (password.length < 8) {
      setPasswordError('Use 8 or more characters with a mix of letters, numbers and symbols');//message to be showed to the user
    } else if (!/[a-zA-Z]/.test(password) || !/[\d\W]/.test(password)) {
      setPasswordError('Use 8 or more characters with a mix of letters, numbers and symbols');//message to be showed to the user
    }
  };

  const handlePasswordBlur = (event) => {
    const password = event.target.value;
    if (password.trim() === '') {
      setPasswordError('This field cannot be left blank');//message to be showed to the user
    } else if (passwordError === '') {
      setPasswordError('Incorrect password');//message to be showed to the user
    }
  };

  const [showOptions, setShowOptions] = React.useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className=' w-full max-w-[256px]'>
      <form
        className=' w-full'
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          alert(JSON.stringify(formJson));
        }}
      >
        <div className='w-full max-w-[256px] flex flex-col justify-center items-center mb-4'>
          <FormControl sx={{ marginBottom:'15px', minWidth:'100%' }} fullWidth >
            <Input 
              placeholder="Email" 
              variant="outlined" 
              type='email'
              required
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              sx={{borderRadius:'3px', height:'40px'}}
            />
            {emailError && <FormHelperText sx={{color:'#c13b2f', fontSize:'14px', paddingY:'8px', marginTop:'0'}}><Info fontSize='sm'/>{emailError}</FormHelperText>}
          </FormControl>
          <FormControl sx={{minWidth:'100%', marginBottom:'15px'}} fullWidth >
            <Input
              sx={{borderRadius:'3px', height:'40px'}} 
              fullWidth 
              placeholder="Password" 
              variant="outlined" 
              type={showPassword ? 'text' : 'password'}
              required
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              endDecorator={showPassword ? <VisibilityOff className=' !text-gray-300' onClick={() => setShowPassword(false)} /> : <Visibility className=' !text-gray-300'  onClick={() => setShowPassword(true)} />}
            />
            {passwordError && <FormHelperText sx={{color:'#c13b2f', fontSize:'14px', display:'flex', alignItems:'start', paddingY:'8px', marginTop:'0'}}><Info fontSize='sm'/>{passwordError}</FormHelperText>}
          </FormControl>

          <Checkbox
            disabled={false}
            label={
              <span>
                I agree to <u>Typeform’s Terms of Service</u>, <u>Privacy Policy</u>, and <u>Data Processing Agreement</u>.
              </span>
            }
            size="md"
            sx={{fontSize:'14px ', marginBottom:'16px'}}
          />

          <div className=' flex flex-col pl-[30px] pb-4 pt-2 w-full'>
            <div className=' w-full flex justify-between items-center text-sm h-[32px] pr-2 cursor-pointer' onClick={toggleOptions}>
              <p className=' text-sm'>See Options</p>
              <div className={`transform transition-transform ${showOptions ? 'rotate-0' : 'rotate-180'}`}>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"></path></svg>
              </div>
            </div>
            {showOptions && (
              <div className=' flex flex-col gap-3'>
                <FormControl>
                  <FormLabel sx={{fontSize:'14px', fontWeight:'400'}}>Get useful tips, inspiration, and offers via e-communication.</FormLabel>
                  <RadioGroup
                    orientation="horizontal"
                  >
                    <Radio value="yes" label="Yes" sx={{fontSize:'14px'}} />
                    <Radio value="no" label="No" sx={{fontSize:'14px'}} />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel sx={{fontSize:'14px', fontWeight:'400'}}>Tailor Typeform to my needs based on my activity.<span className='hover:underline text-[#5c5c5c]'>See Privacy Policy</span></FormLabel>
                  <RadioGroup
                    orientation="horizontal"
                  >
                    <Radio value="yes" label="Yes" sx={{fontSize:'14px'}} />
                    <Radio value="no" label="No" sx={{fontSize:'14px'}} />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel sx={{fontSize:'14px', fontWeight:'400'}}>Tailor Typeform to my needs based on my activity.<span className='hover:underline text-[#5c5c5c]'>See Privacy Policy</span></FormLabel>
                  <RadioGroup
                    orientation="horizontal"
                  >
                    <Radio value="yes" label="Yes" sx={{fontSize:'14px'}} />
                    <Radio value="no" label="No" sx={{fontSize:'14px'}} />
                  </RadioGroup>
                </FormControl>
                <p className=' text-[14px] text-[#5c5c5c]'>You can update your preferences in your Profile at any time</p>
              </div>
            )}
          </div>

          <Button fullWidth type="submit" sx={{backgroundColor:'#191919', maxWidth:'230px', borderRadius:'3px', height:'40px', fontSize:'16px', minWidth:'100%'}}>Create My Free Account</Button>
        </div>
      </form>
    </div>
  );
}
