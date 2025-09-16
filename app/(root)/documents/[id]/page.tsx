import { Editor } from '../../../components/editor/Editor';
import Header from '../../../components/Header';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center 
        justify-center rounded-full bg-white/10 px-3 py-1">
          <p className="document-title">This is a fake document title</p>
        </div>

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
       
      </Header>
      <Editor />
    </div>
  )
}


export default Document;
