import { FeatureCard } from '../../components/FeatureCard';

import classes from './styles.module.scss';

import SpywareIll from '../../images/illustrations/Spyware/Spyware.svg';
import TrackerIll from '../../images/illustrations/Tracker/TrackerDet.svg';
import MediaIll from '../../images/illustrations/SocialMedia/Media.svg';
import RecorderIll from '../../images/illustrations/CallRecorder/Recorder.svg';
import ScreenRecIll from '../../images/illustrations/ScreenRecorder/ScreenRec.svg';

import ScanIcon from '../../images/icons/SpywareIcons/scan.svg';
import AlertIcon from '../../images/icons/SpywareIcons/alert.svg';
import ThreatIcon from '../../images/icons/SpywareIcons/threat.svg';

import ControlIcon from '../../images/icons/TrackerIcons/control.svg';
import LocationIcon from '../../images/icons/TrackerIcons/location.svg';
import SecretIcon from '../../images/icons/TrackerIcons/secret.svg';

import AccessIcon from '../../images/icons/SocialMediaIcons/access.svg';
import AccountsIcon from '../../images/icons/SocialMediaIcons/accounts.svg';
import LoginAlertIcon from '../../images/icons/SocialMediaIcons/loginAlert.svg';

import HideRecordIcon from '../../images/icons/CallRecorderIcons/hideRecords.svg';
import RevokeIcon from '../../images/icons/CallRecorderIcons/revoke.svg';
import SecretTextIcon from '../../images/icons/CallRecorderIcons/secretTxt.svg';

import CameraIcon from '../../images/icons/ScreenRecorderIcons/cameraUsed.svg';
import ScreenRecordIcon from '../../images/icons/ScreenRecorderIcons/screenRecords.svg';
import SilentRecordIcon from '../../images/icons/ScreenRecorderIcons/silentRecords.svg';

const FEATURES_CONFIG = [
  {
    illustration: SpywareIll,
    bgColor: '#EFF1FF',
    title: 'Spyware detector',
    subTitle: 'Find apps secretly spying on you and your data.',
    bullets: [
      { icon: ScanIcon, text: 'Full background anti-spyware scan' },
      { icon: AlertIcon, text: 'Instant spyware detection alerts' },
      { icon: ThreatIcon, text: 'Immediate threat quarantining' },
    ],
  },
  {
    illustration: TrackerIll,
    bgColor: '#F6EDFA',
    title: 'Tracker detector',
    subTitle: 'Discover who tracks your location to spy on you.',
    bullets: [
      { icon: SecretIcon, text: 'Stop being secretly tracked' },
      { icon: LocationIcon, text: 'Protect your real location' },
      { icon: ControlIcon, text: 'Control who sees your location' },
    ],
  },
  {
    illustration: MediaIll,
    bgColor: '#E6F2FE',
    title: 'Social media protection',
    subTitle: 'Easily prevent social media account hacks.',
    bullets: [
      { icon: AccountsIcon, text: 'See who uses your accounts' },
      { icon: AccessIcon, text: 'Revoke access for other users' },
      { icon: LoginAlertIcon, text: 'Get unauthorized login alerts' },
    ],
  },
  {
    illustration: RecorderIll,
    bgColor: '#EAF5E4',
    title: 'Call recorder blocker',
    subTitle: 'Discover if someone records your calls and chats. ',
    bullets: [
      { icon: HideRecordIcon, text: 'Hide your call history and records' },
      { icon: RevokeIcon, text: 'Revoke sharing your contact list' },
      { icon: SecretTextIcon, text: 'Help secret texts remain secret' },
    ],
  },
  {
    illustration: ScreenRecIll,
    bgColor: '#EFF1FF',
    title: 'Screen recording detector',
    subTitle: 'Don’t let anyone access your phone screen.',
    bullets: [
      { icon: ScreenRecordIcon, text: 'Find out if your screen is being recorded' },
      { icon: SilentRecordIcon, text: 'Immediately stop silent recordings' },
      { icon: CameraIcon, text: 'Get alerts if your camera is in use' },
    ],
  },
];

export const FeaturesContainer: React.FC = () => (
  <section className={classes.featuresContainerWrap}>
    <h2 className={classes.featuresContainerTitle}>Clario helps you easily avoid spying. </h2>
    {FEATURES_CONFIG.map(({ illustration, bgColor, bullets, title, subTitle }) => (
      <FeatureCard
        key={subTitle}
        illustration={illustration}
        bgColor={bgColor}
        bullets={bullets}
        title={title}
        subTitle={subTitle}
      />
    ))}
  </section>
);
