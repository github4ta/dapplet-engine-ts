import { ContextConfig } from "./types/contextConfig";
import { EthTxBuilder } from "./extensions/txBuilders/ethTxBuilder";
import { GithubDappletProvider } from './providers/githubDappletProvider';
import { CameraFormatter } from './extensions/formatters/cameraFormatter';
import { EthAddressHtmlFormatter } from './extensions/formatters/ethAddressHtmlFormatter';
import { PlainMustacheView } from './extensions/views/plainMustacheView';
//import { SwarmDappletProvider } from './providers/swarmDappletProvider';

const DEFAULT_CONFIG: ContextConfig = {
    providers: [new GithubDappletProvider()], // new SwarmDappletProvider()
    features: [EthTxBuilder, CameraFormatter, EthAddressHtmlFormatter, PlainMustacheView]
};

export { DEFAULT_CONFIG }