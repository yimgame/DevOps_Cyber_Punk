import SkillBar from '../SkillBar';

export default function SkillBarExample() {
  return (
    <div className="p-8 bg-background space-y-6 max-w-md">
      <SkillBar name="Penetration Testing" level={95} color="primary" />
      <SkillBar name="DevOps & Automation" level={90} color="secondary" />
      <SkillBar name="Cloud Security" level={85} color="accent" />
    </div>
  );
}
